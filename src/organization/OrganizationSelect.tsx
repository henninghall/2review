import { usePullRequests } from "../pull-request/usePullRequests";
import { MultiSelect } from "../ui/MultiSelect";
import { exists, onlyUnique } from "../utils";
import { useOrganizationFilter } from "./useOrganizationFilter";

export const OrganizationSelect = () => {
  const { excludedOrganizations, setExcludedOrganizations } =
    useOrganizationFilter();
  const { data: prs } = usePullRequests();
  const allOrgs = prs
    .filter((pr) => pr.hasOrganizationOwner)
    .map((pr) => pr.owner)
    .filter(onlyUnique)
    .filter(exists);

  return (
    <MultiSelect
      label="Organizations"
      all={allOrgs}
      onExcludedDataChanged={setExcludedOrganizations}
      excluded={excludedOrganizations}
    />
  );
};
