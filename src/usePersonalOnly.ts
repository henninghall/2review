import { atom, useRecoilState } from "recoil";
import { persistAtom } from "./persistAtom";

const state = atom({
  key: "onlyPersonal",
  default: false,
  effects: [persistAtom],
});

export const usePersonalOnly = () => {
  return useRecoilState(state);
};
