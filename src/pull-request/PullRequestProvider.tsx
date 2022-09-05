import { ReactNode, useCallback, useEffect, useState } from "react";
import { useLogin } from "../auth/useLogin";
import { useUsername } from "../auth/useUsername";
import { useTabFocus } from "../useTabFocus";
import { PullRequestContext } from "./context";
import { useFetchPullRequests } from "./fetchPullRequests";
import { PullRequest } from "./types";

interface Props {
  children: ReactNode;
}

export const PullRequestProvider = ({ children }: Props) => {
  const { loggedIn } = useLogin();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<undefined | Error>();
  const [data, setData] = useState<PullRequest[]>([]);
  const { getUsername } = useUsername();
  const fetchPullRequests = useFetchPullRequests();

  const fetch = useCallback(async () => {
    if (!loggedIn) {
      setData([]);
      return;
    }

    setFetching(true);
    setError(undefined);
    try {
      const username = await getUsername();
      const data = await fetchPullRequests({ username });
      setData(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setFetching(false);
    }
  }, [fetchPullRequests, getUsername, loggedIn]);

  useEffect(() => {
    fetch();
  }, [fetch, loggedIn]);

  useTabFocus(() => {
    fetch();
  });

  const loading = fetching && data.length === 0;

  return (
    <PullRequestContext.Provider value={{ data, error, loading, fetching }}>
      {children}
    </PullRequestContext.Provider>
  );
};
