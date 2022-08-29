import styled from "styled-components";
import github from "../svg/github.svg";
import { Button, ButtonProps } from "./Button";

export const GitHubButton = (props: ButtonProps) => (
  <Button {...props}>
    <Icon src={github} alt="github" />
  </Button>
);

const size = 25;

const Icon = styled.img`
  width: ${size}px;
  height: ${size}px;
`;
