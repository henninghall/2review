import { useCallback, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { GithubApi } from "../api/githubApi";
import { persistAtom } from "../persistAtom";

const tokenState = atom<string | undefined>({
  key: "username",
  default: undefined,
  effects: [persistAtom],
});

export const useUsername = () => {
  const [username, setUsername] = useRecoilState(tokenState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(undefined);

  const fetchUsername = useCallback(async () => {
    setLoading(true);
    try {
      const { login } = await GithubApi.getUser();
      return login;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const getUsername = useCallback(async () => {
    if (username) return username;
    const fetchedUsername = await fetchUsername();
    setUsername(fetchedUsername);
    return fetchedUsername;
  }, [fetchUsername, setUsername, username]);

  return {
    loading,
    error,
    clear: () => setUsername(undefined),
    getUsername,
  };
};
