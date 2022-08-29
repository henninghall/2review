import { useEffect } from "react";
import { LoginBody } from "../api/types";
import { fetchJson } from "../fetchJsonx";
import { appType } from "./appType";
import { state } from "./state";
import { AuthResponse } from "./types";
import { useIsAuthorizing } from "./useIsAutherizing";
import { useRefreshToken } from "./useRefreshToken";
import { useToken } from "./useToken";

export const useLogin = () => {
  const [, setToken] = useToken();
  const [, setRefreshToken] = useRefreshToken();
  const [, setIsAuthorizing] = useIsAuthorizing();

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    const receivedState = currentSearchParams.get("state");
    const code = currentSearchParams.get("code");
    const shouldLogin = receivedState && code;
    if (!shouldLogin) return;
    if (state !== receivedState) {
      throw Error("States not matching. Aborting auth.");
    }
    setIsAuthorizing(true);

    const body: LoginBody = {
      state,
      code,
      redirect_uri: window.location.origin,
      type: appType,
    };

    fetchJson<AuthResponse>(`https://2review.app/api/login`, {
      method: "post",
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.access_token) {
          setToken(response.access_token);
          setRefreshToken(response.refresh_token);
        }
      })
      .finally(() => {
        window.history.pushState({}, document.title, window.location.pathname);

        setIsAuthorizing(false);
      });
  }, [setIsAuthorizing, setRefreshToken, setToken]);
};
