import styled from "styled-components";
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

  return (
    <Container>
      <A onClick={() => setShowHelp(true)}>Why don't all PR's show up?</A>
      <A onClick={() => setShowInstall(true)}>Installation</A>
      <A href="https://github.com/henninghall/2review">Github repo</A>
      <A onClick={() => setShowSettings(true)}>Settings</A>
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

const Container = styled.div`
  display: flex;
  height: 100%;
  margin-top: auto;
  justify-content: center;
  padding: 1rem;
  padding-bottom: 2rem;
  color: ${colors.gray200};
  align-items: flex-end;
  flex-wrap: wrap;
`;
