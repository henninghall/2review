import { useContext } from "react";
import { PullRequestContext } from "./context";

export const usePullRequests = () => useContext(PullRequestContext);
