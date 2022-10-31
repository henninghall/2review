import styled from "styled-components";
import { BotToggle } from "./bot-prs/BotToggle";
import { OrganizationSelect } from "./organization/OrganizationSelect";
import { PersonalToggle } from "./personal-prs/PersonalToggle";
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
      <Filters>
        <BotToggle />
        <PersonalToggle />
        <OrganizationSelect />
        {fetching && !loading && <Loader small color="gray200" />}
      </Filters>
    </Container>
  );
};

const Filters = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-end;
  gap: 15px;
  align-items: center;
  min-height: 40px;
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
