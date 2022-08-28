import styled from "styled-components";
import { useShowSettings } from "../settings/useShowSettings";
import github from "../svg/github.svg";
import { colors, defaults, highlights } from "../ui/colors";
import { Loader } from "../ui/Loader";
import { authorizeUrl } from "./authorize";
import { useIsAuthorizing } from "./useIsAutherizing";
import { useToken } from "./useToken";

export const SignInButton = () => {
  const [isAuthorizing, setIsAuth] = useIsAuthorizing();
  return (
    <Button
      $loading={isAuthorizing}
      onClick={() => {
        setIsAuth(true);
        window.location.href = authorizeUrl;
      }}
    >
      <Icon src={github} alt="github" />
      <span>Sign in with GitHub</span>
      {isAuthorizing && <Loader small />}
    </Button>
  );
};

export const SignOutButton = () => {
  const [, setToken] = useToken();
  const [, setShowSettings] = useShowSettings();
  return (
    <Button
      onClick={() => {
        setToken("");
        setShowSettings(false);
      }}
    >
      <Icon src={github} alt="github" />
      <span>Sign out</span>
    </Button>
  );
};

const size = 25;

const Icon = styled.img`
  width: ${size}px;
  height: ${size}px;
`;

const Button = styled.button<{ $loading?: boolean }>`
  height: 3rem;
  font-size: 1em;
  padding: 0 0.7rem;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  border: 1px solid ${colors.gray300};
  ${({ $loading }) => ({ ...($loading ? highlights : defaults) })}
  :hover {
    ${highlights}
  }
`;
