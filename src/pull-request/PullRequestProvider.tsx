import { ReactNode, useCallback, useState } from "react";
import { useIsAuthorizing } from "../auth/useIsAutherizing";
import { useRefresh } from "../auth/useRefresh";
import { useToken } from "../auth/useToken";
import { useUsername } from "../auth/useUsername";
import { PullRequestContext } from "./context";
import { fetchPullRequests } from "./fetchPullRequests";

interface Props {
  children: ReactNode;
}

export const PullRequestProvider = ({ children }: Props) => {
  const [token] = useToken();
  const refreshAuth = useRefresh();
  const [, setIsAuthorizing] = useIsAuthorizing();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<undefined | Error>();
  const [data, setData] = useState<
    Awaited<ReturnType<typeof fetchPullRequests>>
  >([]);
  const { username } = useUsername();

  const fetch = useCallback(async () => {
    if (!token || !username) {
      setData([]);
      return;
    }
    setFetching(true);
    setError(undefined);
    try {
      const data = await fetchPullRequests({ token, username });
      setData(data);
      setFetching(false);
    } catch (error: any) {
      if (error.status === 401) {
        try {
          setIsAuthorizing(true);
          await refreshAuth();
        } catch (error: any) {
          setError(error);
        } finally {
          setIsAuthorizing(false);
        }
      } else {
        setError(error);
        setFetching(false);
      }
    }
  }, [refreshAuth, setIsAuthorizing, token, username]);

  const loading = fetching && data.length === 0;

  return (
    <PullRequestContext.Provider
      value={{ data, error, loading, fetching, fetch }}
    >
      {children}
    </PullRequestContext.Provider>
  );
};
