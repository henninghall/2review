import styled from "styled-components";
import { useLogin } from "./auth/useLogin";
import { useToken } from "./auth/useToken";
import { Footer } from "./Footer";
import { Modals } from "./modals/CurrentModal";
import { PersonalToggle } from "./PersonalToggle";
import { PullRequests } from "./PullRequests";
import { SignInOverlay } from "./SignInOverlay";
import { colors } from "./ui/colors";

export function App() {
  const [token] = useToken();

  useLogin();

  return (
    <Container>
      <Content>
        <Header>
          <HeaderText>
            <h1>Pull requests awaiting your review</h1>
            <p style={{ color: colors.gray200 }}>
              Following pull requests are assigned to you or your team and are
              waiting for review.
            </p>
          </HeaderText>
          <PersonalToggle />
        </Header>
        <PullRequests preview={!token} />
        {!token && <SignInOverlay />}
        <Footer />
      </Content>
      <Modals />
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
  flexWrap: "wrap",
  gap: 20,
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginBottom: "1rem",
});

const HeaderText = styled.div({
  gap: 10,
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
});
