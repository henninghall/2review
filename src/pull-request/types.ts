import { useFetchPullRequests } from "./fetchPullRequests";

export type PullRequest = Awaited<
  ReturnType<ReturnType<typeof useFetchPullRequests>>
>[0];
