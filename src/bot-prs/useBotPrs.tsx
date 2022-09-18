import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";
import { PullRequest } from "../pull-request/types";

const state = atom({
  key: "botPrs",
  default: true,
  effects: [persistAtom],
});

export const useBotPrs = () => {
  const [showBotPrs, setShowBotPrs] = useRecoilState(state);
  const botFilter = (pr: PullRequest) => {
    if (showBotPrs) return true;
    return !pr.user?.login.includes("[bot]");
  };
  return { botFilter, showBotPrs, setShowBotPrs };
};
