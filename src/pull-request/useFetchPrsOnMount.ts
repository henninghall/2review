import { useEffect } from "react";
import { usePullRequests } from "./usePullRequests";

export const useFetchPrsOnMount = () => {
  const { fetch } = usePullRequests();

  useEffect(() => {
    fetch();
  }, [fetch]);
};
