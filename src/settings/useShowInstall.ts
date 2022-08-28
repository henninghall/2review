import { atom, useRecoilState } from "recoil";

const state = atom({
  key: "install",
  default: false,
});

export const useShowInstall = () => {
  return useRecoilState(state);
};
