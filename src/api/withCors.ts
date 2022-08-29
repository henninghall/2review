import type { VercelApiHandler } from "@vercel/node";

export const withCors =
  (fn: VercelApiHandler): VercelApiHandler =>
  async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    return fn(req, res);
  };
