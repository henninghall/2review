import styled from "styled-components";
import { PersonalToggle } from "./PersonalToggle";
import { usePullRequests } from "./pull-request/usePullRequests";
import { colors } from "./ui/colors";
import { Loader } from "./ui/Loader";

export const Header = () => {
  const { fetching, loading } = usePullRequests();

  return (
    <Container>
      <HeaderText>
        <h1>Pull requests awaiting your review</h1>
        <p style={{ color: colors.gray200 }}>
          Following pull requests are assigned to you or your team and are
          waiting for review.
        </p>
      </HeaderText>
      <Right>
        <PersonalToggle />
        {fetching && !loading && <Loader small color="gray200" />}
      </Right>
    </Container>
  );
};

const Right = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 20,
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginBottom: "1rem",
});

const HeaderText = styled.div({
  gap: 10,
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
});
