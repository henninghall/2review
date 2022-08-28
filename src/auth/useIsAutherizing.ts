import { atom, useRecoilState } from "recoil";

const state = atom<boolean>({
  key: "isAuthorizing",
  default: false,
});

export const useIsAuthorizing = () => {
  return useRecoilState(state);
};
