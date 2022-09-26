import { useMount } from "../useMount";
import { useServerMocking } from "./useServerMocking";

export const useInitServerMocking = () => {
  const { enabled, start } = useServerMocking();
  useMount(() => {
    if (enabled) start();
  });
};
