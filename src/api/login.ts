import { fetchText } from "./fetchText";
import { Body } from "./types";

export const login = async ({ state, code, redirect_uri, type }: Body) => {
  const client_secret =
    type === "githubApp"
      ? process.env.GITHUB_APP_CLIENT_SECRET
      : process.env.OAUTH_APP_CLIENT_SECRET;
  if (!client_secret) throw Error("Missing client secret env");

  const client_id =
    type === "githubApp"
      ? process.env.GITHUB_APP_CLIENT_ID
      : process.env.OAUTH_APP_CLIENT_ID;
  if (!client_id) throw Error("Missing client id env");

  const response = await fetchText(
    "https://github.com/login/oauth/access_token",
    {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id,
        code,
        client_secret,
        redirect_uri,
        state,
      }),
    }
  );

  return response;
};
