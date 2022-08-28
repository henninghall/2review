export async function fetchJson<T>(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params);
  const data: T = await response.json();
  return data;
}
