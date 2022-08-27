import { Octokit } from "octokit";

const pages = 1;
const per_page = 10;

export const fetchData = async ({
  token,
  username,
}: {
  token: string;
  username: string;
}) => {
  const octokit = new Octokit({ auth: token });

  const pulls = Array.from({ length: pages }).map((_, i) => {
    const filters = ["is:pr", `review-requested:${username}`, "is:open"];

    return octokit.rest.search.issuesAndPullRequests({
      q: filters.join(" "),
      page: i,
      per_page,
    });
  });

  const result1 = await Promise.all(pulls);

  const allPrs = result1
    .map((r) => r.data.items.map((i) => i.pull_request))
    .flat();

  const promises = allPrs.map((pr) => {
    if (!pr || !pr.url) throw Error("Not a PR");
    const data = pr.url.split("/").reverse();
    const pull_number = parseInt(data[0]);
    const repo = data[2];
    const owner = data[3];
    return octokit.rest.pulls.get({ pull_number, owner, repo });
  });

  const prs = await Promise.all(promises);

  const returnit = prs.map((pr) => {
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
  return returnit;
};
