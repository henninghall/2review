export type AuthType = "githubApp" | "oauthApp";

export interface LoginBody {
  code: string;
  state: string;
  redirect_uri: string;
  type: AuthType;
}

export interface RefreshBody {
  refresh_token: string;
  type: AuthType;
}
