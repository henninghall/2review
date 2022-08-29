import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";

const state = atom<string | undefined>({
  key: "refreshToken",
  default: undefined,
  effects: [persistAtom],
});

export const useRefreshToken = () => {
  return useRecoilState(state);
};
