import styled from "styled-components";
import { useToken } from "./auth/useToken";
import { useShowHelp } from "./settings/useShowHelp";
import { useShowInstall } from "./settings/useShowInstall";
import { useShowSettings } from "./settings/useShowSettings";
import { colors } from "./ui/colors";

export const installationUrl =
  "https://github.com/apps/2review-app/installations/new";

export const Footer = () => {
  const [, setShowHelp] = useShowHelp();
  const [, setShowInstall] = useShowInstall();
  const [, setShowSettings] = useShowSettings();
  const [token] = useToken();

  return (
    <Container>
      <Links>
        {token && (
          <A onClick={() => setShowHelp(true)}>Why don't all PR's show up?</A>
        )}
        <A onClick={() => setShowInstall(true)}>Installation</A>
        <A href="https://github.com/henninghall/2review">Github repo</A>
        {token && <A onClick={() => setShowSettings(true)}>Settings</A>}
      </Links>
    </Container>
  );
};

const A = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})`
  padding: 1.5rem;
  cursor: pointer;
  :hover {
    color: ${colors.gray100};
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 1rem;
  padding-bottom: 2rem;
  color: ${colors.gray200};
  align-items: flex-end;
  justify-content: center;
`;
