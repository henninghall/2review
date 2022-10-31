import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";
import { PullRequest } from "../pull-request/types";

// Reason for using excluded and not included repos is that persistance of repos without prs should not affect the filtering

const state = atom<string[]>({
  key: "excludedRepos",
  default: [],
  effects: [persistAtom],
});

export const useRepoFilter = () => {
  const [excludedRepos, setExcludedRepos] = useRecoilState(state);

  const repoFilter = (pr: PullRequest) => {
    return !excludedRepos.includes(pr.base.repo.name);
  };

  return {
    excludedRepos,
    setExcludedRepos,
    repoFilter,
  };
};
