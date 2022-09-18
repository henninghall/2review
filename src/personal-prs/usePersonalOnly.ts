import { atom, useRecoilState } from "recoil";
import { persistAtom } from "../persistAtom";
import { PullRequest } from "../pull-request/types";

const state = atom({
  key: "onlyPersonal",
  default: false,
  effects: [persistAtom],
});

export const usePersonalOnly = () => {
  const [onlyPersonal, setOnlyPersonal] = useRecoilState(state);
  const personalFilter = (pr: PullRequest) =>
    onlyPersonal ? pr.person.length : true;
  return { onlyPersonal, setOnlyPersonal, personalFilter };
};
