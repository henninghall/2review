import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchText } from "../src/api/fetchText";
import { getClientId, getClientSecret } from "../src/api/getEnvs";
import { toJson } from "../src/api/toJson";
import { RefreshBody } from "../src/api/types";
import { withCors } from "../src/api/withCors";

async function handler(req: VercelRequest, res: VercelResponse) {
  const { refresh_token, type }: RefreshBody = JSON.parse(req.body);
  try {
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
          refresh_token,
          grant_type: "refresh_token",
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
