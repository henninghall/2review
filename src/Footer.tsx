import styled from "styled-components";
import { colors } from "./ui/colors";

export const Footer = () => {
  return (
    <Container>
      <A href="https://github.com/apps/2review-app/installations/new">
        Installation
      </A>
      <A href="https://github.com/henninghall/2review">Github repo</A>
    </Container>
  );
};

const A = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})`
  :hover {
    color: ${colors.gray100};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  color: ${colors.gray200};
`;
