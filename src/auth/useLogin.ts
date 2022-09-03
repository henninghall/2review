import { useCallback, useEffect } from "react";
import { LoginBody } from "../api/types";
import { fetchJson } from "../fetchJsonx";
import { appType } from "./appType";
import { state } from "./state";
import { AuthResponse } from "./types";
import { useIsAuthorizing } from "./useIsAutherizing";
import { useRefreshToken } from "./useRefreshToken";
import { useToken } from "./useToken";
import { useUsername } from "./useUsername";

export const useLogin = () => {
  const [, setToken] = useToken();
  const [, setRefreshToken] = useRefreshToken();
  const [, setIsAuthorizing] = useIsAuthorizing();
  const { updateUsername } = useUsername();

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
        setToken(access_token);
        setRefreshToken(refresh_token);
        await updateUsername({ token: access_token });
      }
    } finally {
      window.history.pushState({}, document.title, window.location.pathname);
      setIsAuthorizing(false);
    }
  }, [code, setIsAuthorizing, setRefreshToken, setToken, updateUsername]);

  useEffect(() => {
    if (shouldLogin()) login();
  }, [login, shouldLogin]);
};
