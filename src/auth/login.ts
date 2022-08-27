import { state } from "./state";
import { clientId } from "./clientId";

interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: "bearer";
}

interface Params {
  code: string;
  receivedState: string;
}

export const login = async ({ receivedState, code }: Params) => {
  if (state !== receivedState) {
    throw Error("States not matching. Aborting auth.");
  }

  if (!process.env.REACT_APP_CLIENT_SECRET)
    throw Error("Missing client secret");

  const url = new URL("https://github.com/login/oauth/access_token");
  url.searchParams.append("client_id", clientId);
  url.searchParams.append("code", code);
  url.searchParams.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);
  url.searchParams.append("redirect_uri", "https://2review.app");
  url.searchParams.append("state", state);
  const response = await fetchJson<LoginResponse>(url, { method: "post" });
  return response;
};

async function fetchJson<T>(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params);
  const data: T = await response.json();
  return data;
}
