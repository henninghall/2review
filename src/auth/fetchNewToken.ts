import { RefreshBody } from "../api/types";
import { fetchJson } from "../fetchJsonx";
import { appType } from "./appType";
import { AuthResponse } from "./types";

export const fetchNewToken = async ({
  refreshToken,
}: {
  refreshToken: string | undefined;
}) => {
  if (!refreshToken) {
    throw Error("Trying to refresh without refresh token");
  }
  const body: RefreshBody = { refresh_token: refreshToken, type: appType };
  const response = await fetchJson<AuthResponse>(
    `https://2review.app/api/refresh`,
    {
      method: "post",
      body: JSON.stringify(body),
    }
  );
  if (!response.access_token) {
    throw Error("Unexpected response of refresh call");
  }
  return response;
};
