import { useCallback } from "react";
import { RefreshBody } from "../api/types";
import { fetchJson } from "../fetchJsonx";
import { appType } from "./appType";
import { AuthResponse } from "./types";
import { useRefreshToken } from "./useRefreshToken";
import { useToken } from "./useToken";

export const useRefresh = () => {
  const [token, setToken] = useToken();
  const [refresh_token, setRefreshToken] = useRefreshToken();

  const refreshAuth = useCallback(async () => {
    if (!token || !refresh_token) {
      throw Error("Unauthorized");
    }
    const body: RefreshBody = { refresh_token, type: appType };
    const response = await fetchJson<AuthResponse>(
      `https://2review.app/api/refresh`,
      {
        method: "post",
        body: JSON.stringify(body),
      }
    );
    if (response.access_token) {
      setToken(response.access_token);
      setRefreshToken(response.refresh_token);
    }
  }, [refresh_token, setRefreshToken, setToken, token]);

  return refreshAuth;
};
