import { fetchPullRequests } from "./fetchPullRequests";

export type PullRequest = Awaited<ReturnType<typeof fetchPullRequests>>[0];
