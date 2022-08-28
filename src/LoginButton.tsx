import styled from "styled-components";
import github from "./svg/github.svg";

interface Props {
  onClick: () => void;
}

export const LoginButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <Icon src={github} alt="github" />
      <span>Sign in with github</span>
    </Button>
  );
};

const size = 30;

const Icon = styled.img`
  width: ${size}px;
  height: ${size}px;
`;

const Button = styled.button`
  background-color: #363636;
  color: white;
  font-size: 1.2em;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid #555;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
