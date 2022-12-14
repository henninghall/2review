import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchText } from "../src/api/fetchText";
import { getClientId, getClientSecret } from "../src/api/getEnvs";
import { toJson } from "../src/api/toJson";
import { LoginBody } from "../src/api/types";
import { withCors } from "../src/api/withCors";

async function handler(req: VercelRequest, res: VercelResponse) {
  const body: LoginBody = JSON.parse(req.body);
  try {
    const { state, code, redirect_uri, type } = body;

    const authResponse = await fetchText(
      "https://github.com/login/oauth/access_token",
      {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: getClientId({ type }),
          client_secret: getClientSecret({ type }),
          code,
          redirect_uri,
          state,
        }),
      }
    );
    const jsonResponse = toJson({ authResponse });
    return res.status(200).json(jsonResponse);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ error: e.message });
  }
}
export default withCors(handler);
