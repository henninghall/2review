import fetch from "node-fetch";

export async function fetchText(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params);
  const data = await response.text();
  return data;
}
