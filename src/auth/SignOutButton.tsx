import { useModal } from "../modals/useModal";
import { GitHubButton } from "../ui/GithubButton";
import { useRefreshToken } from "./useRefreshToken";
import { useToken } from "./useToken";

export const SignOutButton = () => {
  const [, setToken] = useToken();
  const [, setRefreshToken] = useRefreshToken();
  const [, showModal] = useModal();
  return (
    <GitHubButton
      text={"Sign out"}
      onClick={() => {
        setToken(undefined);
        setRefreshToken(undefined);
        showModal(undefined);
      }}
    />
  );
};
