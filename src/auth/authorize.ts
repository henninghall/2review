import { state } from "./state";
import { clientId } from "./clientId";

export const authorizeUrl = (() => {
  const login = new URL("https://github.com/login/oauth/authorize");
  login.searchParams.append("client_id", clientId);
  login.searchParams.append("redirect_uri", "https://2review.app");
  login.searchParams.append("state", state);
  login.searchParams.append("allow_signup", "false");
  return login.href;
})();
