import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";

const state = atom({
  key: "showOrgName",
  default: true,
  effects: [persistAtom],
});

export const useShowOrgName = () => {
  const [showOrgName, setShowOrgName] = useRecoilState(state);
  return { showOrgName, setShowOrgName };
};
