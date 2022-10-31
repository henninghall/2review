import { atom, useRecoilState, useResetRecoilState } from "recoil";
import { Filter } from "../filtering/types";
import { persistAtom } from "../persistAtom";

const state = atom({
  key: "botPrs",
  default: true,
  effects: [persistAtom],
});

export const useBotPrs = () => {
  const [showBotPrs, setShowBotPrs] = useRecoilState(state);
  const reset = useResetRecoilState(state);
  const botFilter: Filter = {
    apply: (pr) => {
      if (showBotPrs) return true;
      return pr.user?.type !== "Bot";
    },
    reset,
  };
  return { botFilter, showBotPrs, setShowBotPrs };
};
