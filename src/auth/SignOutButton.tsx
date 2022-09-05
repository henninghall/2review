import { useModal } from "../modals/useModal";
import { GitHubButton } from "../ui/GithubButton";
import { useLogin } from "./useLogin";

export const SignOutButton = () => {
  const [, showModal] = useModal();
  const { logout } = useLogin();

  return (
    <GitHubButton
      text={"Sign out"}
      onClick={() => {
        logout();
        showModal(undefined);
      }}
    />
  );
};
