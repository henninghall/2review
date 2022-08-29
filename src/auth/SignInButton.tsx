import { GitHubButton } from "../ui/GithubButton";
import { authorizeUrl } from "./authorize";
import { useIsAuthorizing } from "./useIsAutherizing";

export const SignInButton = () => {
  const [isAuthorizing, setIsAuth] = useIsAuthorizing();
  return (
    <GitHubButton
      text={"Sign in with GitHub"}
      loading={isAuthorizing}
      onClick={() => {
        setIsAuth(true);
        window.location.href = authorizeUrl;
      }}
    />
  );
};
