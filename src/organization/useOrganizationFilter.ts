import { atom, useRecoilState, useResetRecoilState } from "recoil";
import { Filter } from "../filtering/types";
import { persistAtom } from "../persistAtom";

// Reason for using excluded and not included organizations is that persistance of organizations without prs should not affect the filtering

const state = atom<string[]>({
  key: "excludedOrganizations",
  default: [],
  effects: [persistAtom],
});

export const useOrganizationFilter = () => {
  const [excludedOrganizations, setExcludedOrganizations] =
    useRecoilState(state);
  const reset = useResetRecoilState(state);

  const organizationFilter: Filter = {
    reset,
    apply: (pr) => {
      if (!pr.hasOrganizationOwner) return true;
      if (!pr.owner) return true;
      return !excludedOrganizations.includes(pr.owner);
    },
    isDefault: excludedOrganizations.length === 0,
  };

  return {
    excludedOrganizations,
    setExcludedOrganizations,
    organizationFilter,
  };
};
