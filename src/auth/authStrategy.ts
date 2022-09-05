import { github } from "../api/githubApi";
import { getNewToken } from "./getNewAuth";

const addAuthHeader = (request: any) => {
  const token = github.token.get();
  if (!token) return;
  request.endpoint.headers.authorization = `bearer ${token}`;
};

type Listener = () => void;
let refreshFailListeners: Listener[] = [];

export const addRefreshFailListener = (listener: Listener) => {
  refreshFailListeners.push(listener);
  return () => {
    refreshFailListeners = refreshFailListeners.filter((l) => l !== listener);
  };
};

export const authStrategy = () => {
  return {
    hook: async (request: any, _route: any, params: any) => {
      // TODO: Login and refresh shouldn't have auth header

      request.endpoint = {
        headers: request.endpoint.headers ?? {},
        ...request.endpoint,
        ...params,
      };

      addAuthHeader(request);

      try {
        return await request(request.endpoint);
      } catch (error: any) {
        if (error.status === 401) {
          const refreshToken = github.refreshToken.get();
          if (!refreshToken) throw error;
          try {
            await getNewToken({ refreshToken });
            addAuthHeader(request);
            return await request(request.endpoint);
          } catch (e) {
            console.error("Could not refresh", e);
            refreshFailListeners.forEach((l) => l());
          }
        }
        throw error;
      }
    },
  };
};
