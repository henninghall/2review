import styled from "styled-components";
import { useLogin } from "./auth/useLogin";
import { useToken } from "./auth/useToken";
import { Footer } from "./Footer";
import { HelpModal, InstallationModal } from "./HelpModal";
import { PullRequests } from "./PullRequests";
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

  useLogin();

  return (
    <Container>
      <Content>
        <Header>
          <div style={{ gap: 10, display: "flex", flexDirection: "column" }}>
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
        <Footer />
      </Content>
      <HelpModal />
      <InstallationModal />
      <SettingsModal />
    </Container>
  );
}

const Container = styled.div({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0px 3vw",
  height: "100%",
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 14,
  backgroundColor: "transparent",
  width: "100%",
  maxWidth: 800,
  marginTop: 30,
  height: "100%",
});

const Header = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: 20,
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginBottom: "1rem",
});

// const SettingsButtonContainer = styled.div({
//   display: "flex",
//   justifyContent: "center",
//   margin: 20,
// });
// {token && (
//   <SettingsButtonContainer>
//     <SettingsButton
//       onClick={() => setShowSettings((shown) => !shown)}
//     />
//   </SettingsButtonContainer>
// )}
