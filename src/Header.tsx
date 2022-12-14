import styled from "styled-components";
import { Filters } from "./Filters";
import { usePullRequests } from "./pull-request/usePullRequests";
import { colors } from "./ui/colors";
import { Loader } from "./ui/Loader";

export const Header = () => {
  const { fetching, loading } = usePullRequests();

  return (
    <Container>
      <Top>
        <HeaderText>
          <h1>Pull requests awaiting your review</h1>
          <p style={{ color: colors.gray200 }}>
            You or your team has been requested to review these pull requests.
          </p>
        </HeaderText>
        {fetching && !loading && <Loader small color="gray200" />}
      </Top>
      <Filters />
    </Container>
  );
};

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: 20,
  marginBottom: "1rem",
});

const HeaderText = styled.div({
  gap: 10,
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
});
