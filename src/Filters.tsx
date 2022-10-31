import { useState } from "react";
import styled from "styled-components";
import { useLogin } from "./auth/useLogin";
import { BotToggle } from "./bot-prs/BotToggle";
import { OrganizationSelect } from "./organization/OrganizationSelect";
import { PersonalToggle } from "./personal-prs/PersonalToggle";
import { usePullRequests } from "./pull-request/usePullRequests";
import { RepoSelect } from "./repo/RepoSelect";
import { colors, highlightsSoft } from "./ui/colors";
import { Icon } from "./ui/Icon";

export const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { loggedIn } = useLogin();

  const { visiblePullRequests, data } = usePullRequests();

  if (!loggedIn) return null;
  if (!data.length) return null;

  return (
    <Container>
      <Header
        href="#"
        onClick={() => {
          setShowFilters((showing) => !showing);
        }}
      >
        <Left>
          Filter
          <Icon name={showFilters ? "chevronUp" : "chevronDown"} size="m" />
        </Left>
        <Info>
          {`Showing ${visiblePullRequests.length} of ${data.length} PRs`}
        </Info>
      </Header>
      {showFilters && (
        <Content>
          <BotToggle />
          <PersonalToggle />
          <OrganizationSelect />
          <RepoSelect />
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
  display: flex;
  background-color: ${colors.gray550};
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px #111;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 1rem;
`;

const Info = styled.p`
  color: ${colors.gray200};
  font-size: 0.8em;
`;

const Header = styled.a`
  cursor: pointer;
  :hover {
    ${highlightsSoft}
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
`;
