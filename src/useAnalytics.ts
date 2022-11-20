import { fetchJson } from "./fetchJsonx";
import { useMount } from "./useMount";
import { useTabFocus } from "./useTabFocus";

const url = "https://analytics.optimistic.se";
const clientKey = "845230c9-5f6d-4c50-8af1-e27cc19674d4";
const type = "visit";

const logVisit = () =>
  fetchJson(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client-key": clientKey,
    },
    body: JSON.stringify({
      query: `mutation { log(type: "${type}") }`,
    }),
  });

export const useAnalytics = () => {
  useMount(logVisit);
  useTabFocus(logVisit);
};
