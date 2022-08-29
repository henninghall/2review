export const toJson = ({ authResponse }: { authResponse: string }) => {
  const params = new URLSearchParams(authResponse);
  const error = params.get("error");
  if (error) throw Error(error);

  return {
    access_token: params.get("access_token"),
    expires_in: params.get("expires_in"),
    refresh_token: params.get("refresh_token"),
    refresh_token_expires_in: params.get("refresh_token_expires_in"),
  };
};
