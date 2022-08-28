import styled from "styled-components";
import { useLogin } from "./auth/useLogin";
import { useToken } from "./auth/useToken";
import { Footer } from "./Footer";
import { PullRequests } from "./PullRequests";
import { useShowSettings } from "./settings/useShowSettings";
import { SettingsButton } from "./SettingsButton";
import { SettingsModal } from "./SettingsModal";
import { SignInOverlay } from "./SignInOverlay";
import { Checkbox } from "./ui/Checkbox";
import { colors } from "./ui/colors";
import { useLocalStorage } from "./useLocalStorage";

export function App() {
  const [token] = useToken();
  const [onlyPersonal, setOnlyPersonal] = useLocalStorage<boolean>(
    "onlyPersonal",
    false
  );
  const [, setShowSettings] = useShowSettings();
  useLogin();

  return (
    <Container>
      <SettingsModal />
      <Content>
        <Header>
          <div>
            <h1>Pull requests awaiting your review</h1>
            <p style={{ color: colors.gray200 }}>
              Following pull requests are assigned to you or your team and are
              waiting for review.
            </p>
          </div>
          {token && (
            <Checkbox
              label="Personal"
              checked={onlyPersonal}
              onChange={setOnlyPersonal}
            />
          )}
        </Header>
        <PullRequests onlyPersonal={onlyPersonal} preview={!token} />
        {!token && <SignInOverlay />}
        {token && (
          <SettingsButtonContainer>
            <SettingsButton
              onClick={() => setShowSettings((shown) => !shown)}
            />
          </SettingsButtonContainer>
        )}
        <Footer />
      </Content>
    </Container>
  );
}

const Container = styled.div({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0px 3vw",
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  backgroundColor: "transparent",
  width: "100%",
  maxWidth: 800,
  marginTop: 30,
});

const Header = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: 20,
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginBottom: "1rem",
});

const SettingsButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: 20,
});
