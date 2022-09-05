import { createContext } from "react";
import { PullRequest } from "./types";

export const PullRequestContext = createContext<{
  data: PullRequest[];
  error: Error | undefined;
  loading: boolean;
  fetching: boolean;
}>({} as never);
