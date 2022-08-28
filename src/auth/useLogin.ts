import { useEffect } from "react";
import { fetchJson } from "../fetchJson";
import { state } from "./state";
import { useIsAuthorizing } from "./useIsAutherizing";
import { useToken } from "./useToken";

interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

export const useLogin = () => {
  const [, setToken] = useToken();
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

    fetchJson<LoginResponse>(`https://2review.app/api/login`, {
      method: "post",
      body: JSON.stringify({
        state,
        code,
        redirect_uri: window.location.origin,
      }),
    })
      .then((response) => {
        if (response.access_token) setToken(response.access_token);
      })
      .finally(() => {
        window.location.href = window.location.origin;
        setIsAuthorizing(false);
      });
  }, [setIsAuthorizing, setToken]);
};
