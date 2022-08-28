import { atom, useRecoilState } from "recoil";

const state = atom({
  key: "help",
  default: false,
});

export const useShowHelp = () => {
  return useRecoilState(state);
};
