import { Octokit } from "octokit";
import { refresh } from "../auth/useRefreshAuth";

type Token = string | null;

export const github: {
  token: { get: () => Token; set: (token: Token) => void };
  refreshToken: { get: () => Token; set: (token: Token) => void };
} = {
  token: {
    get: () => localStorage.getItem("token"),
    set: (token) => {
      token
        ? localStorage.setItem("token", token)
        : localStorage.removeItem("token");
    },
  },
  refreshToken: {
    get: () => localStorage.getItem("refreshToken"),
    set: (token) => {
      token
        ? localStorage.setItem("refreshToken", token)
        : localStorage.removeItem("refreshToken");
    },
  },
};

const addAuthHeader = (request: any) => {
  if (!github.token.get()) return;
  request.endpoint.headers.authorization = `bearer ${github.token.get()}`;
};

const api = new Octokit({
  authStrategy: (params: any) => {
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
            await getNewToken({ refreshToken });
            addAuthHeader(request);
            return await request(request.endpoint);
          }
          throw error;
        }
      },
    };
  },
});

let promises: (() => void)[] = [];
let refreshing = false;
const getNewToken = async ({
  refreshToken,
}: {
  refreshToken: string;
}): Promise<void> => {
  return new Promise(async (res) => {
    if (refreshing) {
      promises.push(res);
      return;
    }
    try {
      refreshing = true;
      const response = await refresh({ refreshToken });
      github.token.set(response.access_token);
      github.refreshToken.set(response.refresh_token);
      res();
      promises.forEach(() => res());
      promises = [];
    } finally {
      refreshing = false;
    }
  });
};

export const GithubApi = (() => {
  return {
    getUser: async () => (await api.rest.users.getAuthenticated()).data,
    getIssuesAndPullRequests: api.rest.search.issuesAndPullRequests,
    getPullRequest: api.rest.pulls.get,
  };
})();
