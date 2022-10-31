import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLogin } from "../auth/useLogin";
import { useUsername } from "../auth/useUsername";
import { useBotPrs } from "../bot-prs/useBotPrs";
import { useServerMocking } from "../mocks/useServerMocking";
import { useOrganizationFilter } from "../organization/useOrganizationFilter";
import { useTeamPrs } from "../team-prs/useTeamPrs";
import { useRepoFilter } from "../repo/useRepoFilter";
import { useMount } from "../useMount";
import { useTabFocus } from "../useTabFocus";
import { useFetchPullRequests } from "./fetchPullRequests";
import { PullRequest, RawPullRequest } from "./types";

interface Props {
  children: ReactNode;
}

const MINUTES_BETWEEN_FETCHES = 5;

const PullRequestContext = createContext<{
  data: PullRequest[];
  visiblePullRequests: PullRequest[];
  error: Error | undefined;
  loading: boolean;
  fetching: boolean;
}>({} as never);

export const usePullRequests = () => useContext(PullRequestContext);

export const PullRequestProvider = ({ children }: Props) => {
  const { loggedIn } = useLogin();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<undefined | Error>();
  const [data, setData] = useState<PullRequest[]>([]);
  const { getUsername } = useUsername();
  const fetchPullRequests = useFetchPullRequests();
  const { useAtChange: useAtServerMockChange } = useServerMocking();

  const fetch = useCallback(async () => {
    if (fetching) return;
    if (!loggedIn) {
      setData([]);
      return;
    }
    setFetching(true);
    setError(undefined);
    try {
      const username = await getUsername();
      const data = await fetchPullRequests({ username });
      const dataWithExtras = data.map(addExtras);
      setData(dataWithExtras);
    } catch (error: any) {
      if (error.status === 401) return; // ignore 401 (user will be logged out)
      setError(error);
    } finally {
      setFetching(false);
    }
  }, [fetchPullRequests, fetching, getUsername, loggedIn]);

  useMount(fetch);
  useTabFocus(fetch);
  useAtInterval(fetch, { minutes: MINUTES_BETWEEN_FETCHES });
  useAtServerMockChange(fetch);

  const loading = fetching && data.length === 0;

  const { teamFilter } = useTeamPrs();
  const { botFilter } = useBotPrs();
  const { organizationFilter } = useOrganizationFilter();
  const { repoFilter } = useRepoFilter();

  const visiblePullRequests = data
    .filter(teamFilter)
    .filter(botFilter)
    .filter(organizationFilter)
    .filter(repoFilter);

  return (
    <PullRequestContext.Provider
      value={{ data, error, loading, fetching, visiblePullRequests }}
    >
      {children}
    </PullRequestContext.Provider>
  );
};

const useAtInterval = (fetch: () => void, { minutes }: { minutes: number }) => {
  useEffect(() => {
    const ms = 1000 * 60 * minutes;
    const interval = setInterval(fetch, ms);
    return () => clearInterval(interval);
  }, [fetch, minutes]);
};

const addExtras = (pr: RawPullRequest): PullRequest => {
  return {
    ...pr,
    hasOrganizationOwner: pr.head.repo?.owner.type === "Organization",
    owner: pr.head.repo?.owner.login,
  };
};
