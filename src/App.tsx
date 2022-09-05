import styled from "styled-components";
import {
  useLogin,
  useLoginWhenNecessary,
  useLogoutWhenNecessary,
} from "./auth/useLogin";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Modals } from "./modals/CurrentModal";
import { PullRequests } from "./pull-request/PullRequests";
import { SignInOverlay } from "./SignInOverlay";

export function App() {
  const { loggedIn } = useLogin();
  useLoginWhenNecessary();
  useLogoutWhenNecessary();

  return (
    <Container>
      <Content>
        <Header />
        <PullRequests />
        {!loggedIn && <SignInOverlay />}
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
