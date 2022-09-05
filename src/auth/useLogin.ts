import { useCallback, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { github } from "../api/githubApi";
import { LoginBody } from "../api/types";
import { fetchJson } from "../fetchJsonx";
import { appType } from "./appType";
import { state } from "./state";
import { AuthResponse } from "./types";
import { useIsAuthorizing } from "./useIsAutherizing";

type Callback = () => void;
let onLoginCallbacks: Callback[] = [];
let onLogoutCallbacks: Callback[] = [];

const loggedInState = atom({
  key: "loggedIn",
  default: !!github.token.get(),
});

export const useLogin = () => {
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
        onLoginCallbacks.forEach((c) => c());
      }
    } finally {
      window.history.pushState({}, document.title, window.location.pathname);
      setIsAuthorizing(false);
    }
  }, [code, setIsAuthorizing, setLoggedIn]);

  const onLogin = (callback: Callback) => {
    onLoginCallbacks.push(callback);
    return () => {
      onLoginCallbacks = onLoginCallbacks.filter((c) => c !== callback);
    };
  };

  const onLogout = (callback: Callback) => {
    onLogoutCallbacks.push(callback);
    return () => {
      onLogoutCallbacks = onLogoutCallbacks.filter((c) => c !== callback);
    };
  };

  const logout = () => {
    setLoggedIn(false);
    github.token.set(null);
    github.refreshToken.set(null);
    onLogoutCallbacks.forEach((c) => c());
  };

  return { login, shouldLogin, loggedIn, onLogin, logout, onLogout };
};

export const useLoginWhenNecessary = () => {
  const { shouldLogin, login } = useLogin();
  useEffect(() => {
    if (shouldLogin()) login();
  }, [login, shouldLogin]);
};
