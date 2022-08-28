const key = "randomSessionString";

export const state = (() => {
  if (process.env.JEST_WORKER_ID) return "";
  const current = sessionStorage.getItem(key);
  if (current) return current;
  const array = new Uint32Array(10);
  window.self.crypto.getRandomValues(array);
  const randomString = array.join("");
  sessionStorage.setItem(key, randomString);
  return randomString;
})();
