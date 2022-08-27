import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
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

const allowCors = (fn) => async (req: VercelRequest, res: VercelResponse) => {
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
  const body: Params = JSON.parse(req.body);
  try {
    const loginResponse = await login(body);
    const params = new URLSearchParams(loginResponse);

    return res.status(200).json({
      authToken: params.get("access_token"),
      expires_in: params.get("expires_in"),
      refresh_token: params.get("refresh_token"),
      refresh_token_expires_in: params.get("refresh_token_expires_in"),
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e.message });
  }
}
export default allowCors(handler);

const login = async ({ state, code }: Params) => {
  if (!process.env.REACT_APP_CLIENT_SECRET)
    throw Error("Missing client secret");

  const body = new URLSearchParams({
    client_id: clientId,
    code,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    redirect_uri: "https://2review.app",
    state,
  });

  console.log(body);

  const response = await fetchJson<string>(
    "https://github.com/login/oauth/access_token",
    {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    }
  );

  return response;
};

async function fetchJson<T>(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params);
  const data: T = await response.text();
  return data;
}
