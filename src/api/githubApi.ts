import { Octokit } from "octokit";
import { authStrategy } from "../auth/authStrategy";

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

const api = new Octokit({ authStrategy });

export const GithubApi = {
  getUser: async () => (await api.rest.users.getAuthenticated()).data,
  getIssuesAndPullRequests: api.rest.search.issuesAndPullRequests,
  getPullRequest: api.rest.pulls.get,
};
