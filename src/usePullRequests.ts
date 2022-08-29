import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { useRefresh } from "./auth/useRefresh";
import { useToken } from "./auth/useToken";

const pages = 1;
const per_page = 50;

export type PullRequest = ReturnType<typeof usePullRequests>["data"][0];

export const usePullRequests = () => {
  const [token] = useToken();
  const refreshAuth = useRefresh();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<undefined | Error>();
  const [data, setData] = useState<Awaited<ReturnType<typeof fetchPrs>>>([]);

  useEffect(() => {
    (async () => {
      if (!token) {
        setData([]);
        return;
      }
      setLoading(true);
      setError(undefined);
      try {
        const data = await fetchPrs({ token });
        setData(data);
      } catch (error: any) {
        if (error.status === 401) {
          refreshAuth();
          return;
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [refreshAuth, token]);

  return { data, error, loading };
};

const fetchPrs = async ({ token }: { token: string }) => {
  const octokit = new Octokit({ auth: token });

  const { login } = (await octokit.rest.users.getAuthenticated()).data;

  const prPromises = Array.from({ length: pages }).map((_, i) => {
    const filters = ["is:pr", `review-requested:${login}`, "is:open"];

    return octokit.rest.search.issuesAndPullRequests({
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
    return octokit.rest.pulls.get({ pull_number, owner, repo });
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
      .filter((r) => r.login === login)
      .map((p) => p.login);

    return { person, teams, title, html_url, updated_at };
  });
  return prsWithReviewers;
};
