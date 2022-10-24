import { useFetchPullRequests } from "./fetchPullRequests";

export type RawPullRequest = Awaited<
  ReturnType<ReturnType<typeof useFetchPullRequests>>
>[0];

interface PullRequestExtras {
  hasOrganizationOwner: boolean;
  owner: string | undefined;
}

export interface PullRequest extends PullRequestExtras, RawPullRequest {}
