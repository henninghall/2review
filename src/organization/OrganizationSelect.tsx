import { usePullRequests } from "../pull-request/usePullRequests";
import { MultiSelect } from "../ui/MultiSelect";
import { exists, onlyUnique } from "../utils";
import { useOrganizationFilter } from "./useOrganizationFilter";

export const OrganizationSelect = () => {
  const { excludedOrganizations, setExcludedOrganizations } =
    useOrganizationFilter();
  const { data: prs } = usePullRequests();
  const allOrgs = prs
    .map((pr) => pr.owner)
    .filter(onlyUnique)
    .filter(exists);

  const hasOnlyOrganizationOwners = prs.every((p) => p.hasOrganizationOwner);

  return (
    <MultiSelect
      label={hasOnlyOrganizationOwners ? "Organizations" : "Owners"}
      all={allOrgs}
      onExcludedDataChanged={setExcludedOrganizations}
      excluded={excludedOrganizations}
    />
  );
};
