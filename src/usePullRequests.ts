import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { useToken } from "./auth/useToken";

const pages = 1;
const per_page = 50;

export type PullRequest = ReturnType<typeof usePullRequests>["data"][0];

export const usePullRequests = () => {
  const [token] = useToken();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Awaited<ReturnType<typeof fetchPrs>>>([]);

  useEffect(() => {
    if (!token) {
      setData([]);
      return;
    }
    setLoading(true);
    fetchPrs({ token })
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  }, [token]);

  return { data, loading };
};

const fetchPrs = async ({ token }: { token: string }) => {
  const octokit = new Octokit({ auth: token });

  const { login, ...rest } = (await octokit.rest.users.getAuthenticated()).data;
  // const orgs2 = await octokit.rest.orgs.listMembershipsForAuthenticatedUser({});
  // const orgs2 = await octokit.rest.orgs.
  // const orgs2 = await octokit.rest.orgs.listMembershipsForAuthenticatedUser();
  // const orgs2 = await octokit.rest.orgs.listAppInstallations({
  //   org: "mindlercare",
  // });
  // console.log({ orgs2 });

  const pulls = Array.from({ length: pages }).map((_, i) => {
    const filters = ["is:pr", `review-requested:${login}`, "is:open"];

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
      .filter((r) => r.login === login)
      .map((p) => p.login);

    return { person, teams, title, html_url, updated_at };
  });
  return returnit;
};
