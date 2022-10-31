import { useBotPrs } from "../bot-prs/useBotPrs";
import { useOrganizationFilter } from "../organization/useOrganizationFilter";
import { PullRequest } from "../pull-request/types";
import { useRepoFilter } from "../repo/useRepoFilter";
import { useTeamPrs } from "../team-prs/useTeamPrs";
import { Filter } from "./types";

export const useFilters = () => {
  const { teamFilter } = useTeamPrs();
  const { botFilter } = useBotPrs();
  const { organizationFilter } = useOrganizationFilter();
  const { repoFilter } = useRepoFilter();

  const filters: Filter[] = [
    teamFilter,
    botFilter,
    organizationFilter,
    repoFilter,
  ];

  const combinedFilter = (pr: PullRequest) =>
    filters.every((filter) => filter.apply(pr));

  const reset = () => filters.forEach((filter) => filter.reset());

  return { combinedFilter, reset };
};
