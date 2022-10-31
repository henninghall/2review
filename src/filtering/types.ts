import { PullRequest } from "../pull-request/types";

export interface Filter {
  apply: (pr: PullRequest) => boolean;
  reset: () => void;
  isDefault: boolean;
}
