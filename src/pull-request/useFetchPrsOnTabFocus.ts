import { useTabFocus } from "../useTabFocus";
import { usePullRequests } from "./usePullRequests";

export const useFetchPrsOnTabFocus = () => {
  const { fetch } = usePullRequests();

  useTabFocus(() => {
    fetch();
  });
};
