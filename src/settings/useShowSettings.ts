import { atom, useRecoilState } from "recoil";

const settingsState = atom({
  key: "settings",
  default: false,
});

export const useShowSettings = () => {
  return useRecoilState(settingsState);
};
