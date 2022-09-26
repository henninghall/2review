import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";
import { PullRequest } from "../pull-request/types";

const state = atom({
  key: "teamPrs",
  default: true,
  effects: [persistAtom],
});

export const useTeamPrs = () => {
  const [showTeamPrs, setShowTeamPrs] = useRecoilState(state);
  const teamFilter = (pr: PullRequest) =>
    showTeamPrs ? true : pr.person.length;
  return {
    showTeamPrs,
    setShowTeamPrs,
    teamFilter,
  };
};
