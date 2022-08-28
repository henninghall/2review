import styled from "styled-components";
import { useShowSettings } from "../settings/useShowSettings";
import github from "../svg/github.svg";
import { Loader } from "../ui/Loader";
import { authorizeUrl } from "./authorize";
import { useIsAuthorizing } from "./useIsAutherizing";
import { useToken } from "./useToken";

export const LoginButton = () => {
  const [isAuthorizing, setIsAuth] = useIsAuthorizing();
  return (
    <Button
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

export const LogoutButton = () => {
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
      <span>Logout</span>
    </Button>
  );
};

const size = 25;

const Icon = styled.img`
  width: ${size}px;
  height: ${size}px;
`;

const Button = styled.button`
  height: 50px;
  background-color: #363636;
  color: white;
  font-size: 1em;
  padding: 0 0.7rem;
  border-radius: 7px;
  border: 1px solid #555;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
