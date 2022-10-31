import { atom, useRecoilState, useResetRecoilState } from "recoil";
import { Filter } from "../filtering/types";
import { persistAtom } from "../persistAtom";

const initialValue = true;

const state = atom({
  key: "botPrs",
  default: initialValue,
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
    isDefault: initialValue === showBotPrs,
  };
  return { botFilter, showBotPrs, setShowBotPrs };
};
