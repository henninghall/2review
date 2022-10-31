import { atom, useRecoilState } from "recoil";
import { useUsername } from "../auth/useUsername";
import { persistAtom } from "../persistAtom";
import { PullRequest } from "../pull-request/types";

const state = atom({
  key: "teamPrs",
  default: true,
  effects: [persistAtom],
});

export const useTeamPrs = () => {
  const { username } = useUsername();
  const [showTeamPrs, setShowTeamPrs] = useRecoilState(state);

  const teamFilter = (pr: PullRequest) => {
    if (showTeamPrs) return true;
    if (!username) return false;
    return pr.person.includes(username);
  };

  return { showTeamPrs, setShowTeamPrs, teamFilter };
};
