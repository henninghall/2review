import { AuthType } from "./types";

export const getClientSecret = ({ type }: { type: AuthType }) => {
  const clientSecret =
    type === "githubApp"
      ? process.env.GITHUB_APP_CLIENT_SECRET
      : process.env.OAUTH_APP_CLIENT_SECRET;
  if (!clientSecret) throw Error("Missing client secret env");
  return clientSecret;
};

export const getClientId = ({ type }: { type: AuthType }) => {
  const clientId =
    type === "githubApp"
      ? process.env.GITHUB_APP_CLIENT_ID
      : process.env.OAUTH_APP_CLIENT_ID;
  if (!clientId) throw Error("Missing client id env");
  return clientId;
};
