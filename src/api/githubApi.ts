import { Octokit } from "octokit";

export const githubApi = ({ token }: { token: string }) => {
  const api = () => new Octokit({ auth: token });

  return {
    getUser: async () => (await api().rest.users.getAuthenticated()).data,
    issuesAndPullRequests: api().rest.search.issuesAndPullRequests,
    getPullRequest: api().rest.pulls.get,
  };
};
