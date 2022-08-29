export interface Body {
  code: string;
  state: string;
  redirect_uri: string;
  type: "githubApp" | "oauthApp";
}
