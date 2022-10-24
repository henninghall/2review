import styled from "styled-components";
import { Color, colors } from "./colors";

const getScale = ({ small }: Props) => (small ? 0.5 : 1);
const height = ({ scale }: { scale: number }) => 70 * scale;
export const getHeight = ({ small }: Props) =>
  height({ scale: getScale({ small }) });

interface Props {
  small?: boolean;
  color?: Color;
}

export const Loader = ({ small, color = "gray100" }: Props) => {
  return (
    <Container
      className="lds-ellipsis"
      scale={getScale({ small })}
      color={color}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

const Container = styled.div<{ scale: number; color: Color }>`
  display: inline-block;
  position: relative;
  width: ${({ scale }) => 80 * scale}px;
  height: ${height}px;
  div {
    position: absolute;
    top: ${({ scale }) => 33 * scale}px;
    width: ${({ scale }) => 13 * scale}px;
    height: ${({ scale }) => 13 * scale}px;
    border-radius: 50%;
    background: ${({ color }) => colors[color]};
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
