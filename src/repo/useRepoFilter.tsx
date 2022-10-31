import { atom, useRecoilState, useResetRecoilState } from "recoil";
import { Filter } from "../filtering/types";
import { persistAtom } from "../persistAtom";

// Reason for using excluded and not included repos is that persistance of repos without prs should not affect the filtering

const state = atom<string[]>({
  key: "excludedRepos",
  default: [],
  effects: [persistAtom],
});

export const useRepoFilter = () => {
  const [excludedRepos, setExcludedRepos] = useRecoilState(state);
  const reset = useResetRecoilState(state);

  const repoFilter: Filter = {
    apply: (pr) => !excludedRepos.includes(pr.base.repo.name),
    reset,
  };

  return {
    excludedRepos,
    setExcludedRepos,
    repoFilter,
  };
};
