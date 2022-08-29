import { useShowSettings } from "../settings/useShowSettings";
import { GitHubButton } from "../ui/GithubButton";
import { useToken } from "./useToken";

export const SignOutButton = () => {
  const [, setToken] = useToken();
  const [, setRefreshToken] = useToken();
  const [, setShowSettings] = useShowSettings();
  return (
    <GitHubButton
      text={"Sign out"}
      onClick={() => {
        setToken("");
        setRefreshToken("");
        setShowSettings(false);
      }}
    />
  );
};
