import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";

const tokenState = atom<string | undefined>({
  key: "token",
  default: undefined,
  effects: [persistAtom],
});

export const useToken = () => {
  return useRecoilState(tokenState);
};
