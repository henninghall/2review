import { atom, useRecoilState, useResetRecoilState } from "recoil";
import { useUsername } from "../auth/useUsername";
import { Filter } from "../filtering/types";
import { persistAtom } from "../persistAtom";

const initialValue = true;

const state = atom({
  key: "teamPrs",
  default: initialValue,
  effects: [persistAtom],
});

export const useTeamPrs = () => {
  const { username } = useUsername();
  const [showTeamPrs, setShowTeamPrs] = useRecoilState(state);
  const reset = useResetRecoilState(state);

  const teamFilter: Filter = {
    apply: (pr) => {
      if (showTeamPrs) return true;
      if (!username) return false;
      return pr.person.some((p) => p.name === username);
    },
    reset,
    isDefault: initialValue === showTeamPrs,
  };

  return { showTeamPrs, setShowTeamPrs, teamFilter };
};
