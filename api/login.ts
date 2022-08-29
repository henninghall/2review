import type { VercelRequest, VercelResponse } from "@vercel/node";
import { login } from "../src/api/login";
import { Body } from "../src/api/types";
import { withCors } from "../src/api/withCors";

async function handler(req: VercelRequest, res: VercelResponse) {
  const body: Body = JSON.parse(req.body);
  try {
    const loginResponse = await login(body);
    const params = new URLSearchParams(loginResponse);
    const error = params.get("error");
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
