import { atom, useRecoilState } from "recoil";
import { Modal } from "./type";

const state = atom<Modal | undefined>({
  key: "modal",
  default: undefined,
});

export const useModal = () => {
  return useRecoilState(state);
};
