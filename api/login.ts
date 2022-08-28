import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

interface Body {
  code: string;
  state: string;
  redirect_uri: string;
  type: "githubApp" | "oauthApp";
}

const withCors = (fn) => async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return await fn(req, res);
};

async function handler(req: VercelRequest, res: VercelResponse) {
  const body: Body = JSON.parse(req.body);
  try {
    const loginResponse = await login(body);
    const params = new URLSearchParams(loginResponse);
    console.log(loginResponse);
    const error = params.get("error", req.body);
    if (error) throw Error(error);

    return res.status(200).json({
      access_token: params.get("access_token"),
      expires_in: params.get("expires_in"),
      refresh_token: params.get("refresh_token"),
      refresh_token_expires_in: params.get("refresh_token_expires_in"),
    });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ error: e.message });
  }
}
export default withCors(handler);

const login = async ({ state, code, redirect_uri, type }: Body) => {
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

  const response = await fetchText<string>(
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

async function fetchText<T>(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params);
  const data: T = await response.text();
  return data;
}
