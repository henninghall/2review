import styled from "styled-components";
import { colors } from "./colors";

export const Loader = ({ small }: { small?: boolean }) => {
  return (
    <Container className="lds-ellipsis" scale={small ? 0.5 : 1}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

const Container = styled.div<{ scale: number }>`
  display: inline-block;
  position: relative;
  width: ${({ scale }) => 80 * scale}px;
  height: ${({ scale }) => 80 * scale}px;
  div {
    position: absolute;
    top: ${({ scale }) => 33 * scale}px;
    width: ${({ scale }) => 13 * scale}px;
    height: ${({ scale }) => 13 * scale}px;
    border-radius: 50%;
    background: ${colors.gray100};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: ${({ scale }) => 8 * scale}px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: ${({ scale }) => 8 * scale}px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: ${({ scale }) => 32 * scale}px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: ${({ scale }) => 56 * scale}px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(${({ scale }) => 24 * scale}px, 0);
    }
  }
`;
