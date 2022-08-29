import { ReactNode } from "react";
import styled from "styled-components";
import { colors, defaults, highlights } from "./colors";
import { Loader } from "./Loader";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  loading?: boolean;
  children?: ReactNode;
}

export const Button = ({ loading, children, text, onClick }: ButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Content>
        {children}
        <p>{text}</p>
      </Content>
      {loading && <Loader small />}
    </Container>
  );
};

const Container = styled.button<{ $loading?: boolean }>`
  font-size: 1em;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
  border: 1px solid ${colors.gray300};
  ${({ $loading }) => ({ ...($loading ? highlights : defaults) })}
  :hover {
    ${highlights}
  }
`;

const Content = styled.div<{ $loading?: boolean }>`
  font-size: 1em;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  padding: 0.8rem 0;
  display: flex;
`;
