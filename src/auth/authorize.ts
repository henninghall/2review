import { appType } from "./appType";
import { githubAppClientId, oauthAppClientId } from "./clientId";
import { state } from "./state";

const clientid = appType === "githubApp" ? githubAppClientId : oauthAppClientId;

export const authorizeUrl = (() => {
  const login = new URL("https://github.com/login/oauth/authorize");
  login.searchParams.append("client_id", clientid);
  login.searchParams.append("redirect_uri", window.location.origin);
  login.searchParams.append("state", state);
  login.searchParams.append("allow_signup", "false");
  // login.searchParams.append("scope", "repo");
  return login.href;
})();
