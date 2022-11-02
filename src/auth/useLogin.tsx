import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { atom, useRecoilState } from "recoil";
import { github } from "../api/githubApi";
import { LoginBody } from "../api/types";
import { fetchJson } from "../fetchJsonx";
import { appType } from "./appType";
import { addRefreshFailListener } from "./authStrategy";
import { state } from "./state";
import { AuthResponse } from "./types";
import { useIsAuthorizing } from "./useIsAutherizing";

const loggedInState = atom({
  key: "loggedIn",
  default: !!github.token.get(),
});

type AuthEvent = "loginSuccess";

let listeners: { event: AuthEvent; onEvent: () => void }[] = [];

interface LoginValue {
  login: () => Promise<void>;
  shouldLogin: () => boolean;
  loggedIn: boolean;
  logout: () => void;
  setLoggedIn: (loggedIn: boolean) => void;
  useEvent: (event: AuthEvent, onEvent: () => void) => void;
}

const LoginContext = createContext<LoginValue>({} as never);

export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const [, setIsAuthorizing] = useIsAuthorizing();
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const receivedState = params.get("state");

  const shouldLogin = useCallback(() => {
    if (!receivedState) return false;
    if (!state) return false;
    if (state !== receivedState) {
      throw Error("States not matching. Aborting auth.");
    }
    return true;
  }, [receivedState]);

  const emit = (event: AuthEvent) => {
    listeners.filter((l) => l.event === event).forEach((l) => l.onEvent());
  };

  const login = useCallback(async () => {
    if (!code) return;

    setIsAuthorizing(true);

    const body: LoginBody = {
      state,
      code,
      redirect_uri: window.location.origin,
      type: appType,
    };

    try {
      const response = await fetchJson<AuthResponse>(
        `https://2review.app/api/login`,
        {
          method: "post",
          body: JSON.stringify(body),
        }
      );
      const { access_token, refresh_token } = response;

      if (access_token) {
        setLoggedIn(true);
        github.token.set(access_token);
        github.refreshToken.set(refresh_token);
      }
    } finally {
      window.history.pushState({}, document.title, window.location.pathname);
      setIsAuthorizing(false);
    }
  }, [code, setIsAuthorizing, setLoggedIn]);

  const logout = () => {
    setLoggedIn(false);
    github.token.set(null);
    github.refreshToken.set(null);
  };

  const subscribe = useCallback((event: AuthEvent, onEvent: () => void) => {
    const listener = { onEvent, event };
    listeners.push(listener);
    const unsubscribe = () => {
      listeners = listeners.filter((l) => l !== listener);
    };
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (loggedIn) emit("loginSuccess");
  }, [loggedIn]);

  const useEvent = (event: "loginSuccess", fn: () => void) => {
    useEffect(() => {
      return subscribe(event, fn);
    }, [event, fn]);
  };

  const value: LoginValue = {
    login,
    shouldLogin,
    loggedIn,
    logout,
    setLoggedIn,
    useEvent,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export const useLoginWhenNecessary = () => {
  const { shouldLogin, login } = useLogin();
  useEffect(() => {
    if (shouldLogin()) login();
  }, [login, shouldLogin]);
};

export const useLogoutWhenNecessary = () => {
  const { logout } = useLogin();
  useEffect(() => {
    return addRefreshFailListener(logout);
  }, [logout]);
};
