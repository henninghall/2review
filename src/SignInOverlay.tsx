import styled from "styled-components";
import { LoginButton } from "./auth/Buttons";

const color = "rgba(26, 26, 26, 0.84)";
const s1 = 90;
const s2 = 90;

export const SignInOverlay = () => {
  return (
    <Overlay>
      <LoginButton />
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
  padding: 100px;
  -webkit-box-shadow: 0px 0px ${s1}px ${s2}px ${color};
  box-shadow: 0px 0px ${s1}px ${s2}px ${color};
  border-radius: 100rem;
`;
