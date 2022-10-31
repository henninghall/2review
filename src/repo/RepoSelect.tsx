import { usePullRequests } from "../pull-request/usePullRequests";
import { MultiSelect } from "../ui/MultiSelect";
import { exists, onlyUnique } from "../utils";
import { useRepoFilter } from "./useRepoFilter";

export const RepoSelect = () => {
  const { excludedRepos, setExcludedRepos } = useRepoFilter();
  const { data: prs } = usePullRequests();

  const allRepos = prs
    .map((pr) => pr.base.repo.name)
    .filter(onlyUnique)
    .filter(exists);

  return (
    <MultiSelect
      label="Repositories"
      all={allRepos}
      onExcludedDataChanged={setExcludedRepos}
      excluded={excludedRepos}
    />
  );
};
