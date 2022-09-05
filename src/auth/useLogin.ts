import { useCallback, useEffect } from "react";
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

  return { login, shouldLogin, loggedIn, logout, setLoggedIn };
};

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
