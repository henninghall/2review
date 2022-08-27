const clientId = "Iv1.395428b4814a0264";

interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

interface Params {
  code: string;
  state: string;
}

export default async function handler(request, response) {
  console.log(request);

  // await login({state: ''})
  response.status(200).json({
    success: true,
    // body: request.body,
    // query: request.query,
    // cookies: request.cookies,
  });
}

const login = async ({ state, code }: Params) => {
  if (!process.env.REACT_APP_CLIENT_SECRET)
    throw Error("Missing client secret");

  const url = new URL("https://github.com/login/oauth/access_token");
  url.searchParams.append("client_id", clientId);
  url.searchParams.append("code", code);
  url.searchParams.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);
  url.searchParams.append("redirect_uri", "https://2review.app");
  url.searchParams.append("state", state);
  const response = await fetchJson<LoginResponse>(url, {
    method: "post",
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
  });
  return response;
};

async function fetchJson<T>(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params);
  const data: T = await response.json();
  return data;
}
