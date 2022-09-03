import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { githubApi } from "../api/githubApi";
import { persistAtom } from "../persistAtom";

const tokenState = atom<string | undefined>({
  key: "username",
  default: undefined,
  effects: [persistAtom],
});

export const useUsername = () => {
  const [username, setUsername] = useRecoilState(tokenState);

  const updateUsername = useCallback(
    async ({ token }: { token: string }) => {
      const { login } = await githubApi({ token }).getUser();
      setUsername(login);
    },
    [setUsername]
  );

  return { username, updateUsername };
};
