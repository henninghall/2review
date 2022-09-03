import { githubApi } from "../api/githubApi";

const pages = 1;
const per_page = 50;

export const fetchPullRequests = async ({
  token,
  username,
}: {
  token: string;
  username: string;
}) => {
  const api = githubApi({ token });

  const prPromises = Array.from({ length: pages }).map((_, i) => {
    const filters = ["is:pr", `review-requested:${username}`, "is:open"];
    return api.issuesAndPullRequests({
      q: filters.join(" "),
      page: i,
      per_page,
    });
  });

  const prs = await Promise.all(prPromises);

  const flattenPrs = prs
    .map((r) => r.data.items.map((i) => i.pull_request))
    .flat();

  const reviewerPromises = flattenPrs.map((pr) => {
    if (!pr || !pr.url) throw Error("Not a PR");
    const data = pr.url.split("/").reverse();
    const pull_number = parseInt(data[0]);
    const repo = data[2];
    const owner = data[3];
    return api.getPullRequest({ pull_number, owner, repo });
  });

  const rawPrWithReviewers = await Promise.all(reviewerPromises);

  const prsWithReviewers = rawPrWithReviewers.map((pr) => {
    if (!pr) throw Error("Not a PR");
    const {
      requested_reviewers,
      requested_teams,
      title,
      html_url,
      updated_at,
    } = pr.data;
    if (!requested_reviewers) throw Error("Unexpected revivers format");
    if (!requested_teams) throw Error("Unexpected requested teams format");
    const teams = requested_teams.map((team) => team.name);
    const person = requested_reviewers
      .filter((r) => r.login === username)
      .map((p) => p.login);

    return { person, teams, title, html_url, updated_at };
  });
  return prsWithReviewers;
};
