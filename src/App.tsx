import styled from "styled-components";
import { useLogin } from "./auth/useLogin";
import { useToken } from "./auth/useToken";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Modals } from "./modals/CurrentModal";
import { PullRequests } from "./pull-request/PullRequests";
import { useFetchPrsOnMount } from "./pull-request/useFetchPrsOnMount";
import { useFetchPrsOnTabFocus } from "./pull-request/useFetchPrsOnTabFocus";
import { SignInOverlay } from "./SignInOverlay";

export function App() {
  const [token] = useToken();

  useLogin();
  useFetchPrsOnMount();
  useFetchPrsOnTabFocus();

  return (
    <Container>
      <Content>
        <Header />
        <PullRequests />
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
