import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";
import { PullRequest } from "../pull-request/types";

// Reason for using excluded and not included organizations is that persistance of organizations without prs should not affect the filtering

const state = atom<string[]>({
  key: "excludedOrganizations",
  default: [],
  effects: [persistAtom],
});

export const useOrganizationFilter = () => {
  const [excludedOrganizations, setExcludedOrganizations] =
    useRecoilState(state);

  const organizationFilter = (pr: PullRequest) => {
    if (!pr.hasOrganizationOwner) return true;
    if (!pr.owner) return true;
    return !excludedOrganizations.includes(pr.owner);
  };

  return {
    excludedOrganizations,
    setExcludedOrganizations,
    organizationFilter,
  };
};
