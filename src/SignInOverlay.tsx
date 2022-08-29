import styled from "styled-components";
import { SignInButton } from "./auth/SignInButton";

const color = "rgba(26, 26, 26, 0.84)";
const s1 = 150;
const s2 = 150;

export const SignInOverlay = () => {
  return (
    <Overlay>
      <SignInButton />
    </Overlay>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: ${color};
  padding: 2rem;
  -webkit-box-shadow: 0px 0px ${s1}px ${s2}px ${color};
  box-shadow: 0px 0px ${s1}px ${s2}px ${color};
  border-radius: 100rem;
`;
