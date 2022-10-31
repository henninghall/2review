import { useState } from "react";
import styled from "styled-components";
import { useLogin } from "./auth/useLogin";
import { BotToggle } from "./bot-prs/BotToggle";
import { useFilters } from "./filtering/useFilters";
import { OrganizationSelect } from "./organization/OrganizationSelect";
import { usePullRequests } from "./pull-request/usePullRequests";
import { RepoSelect } from "./repo/RepoSelect";
import { TeamToggle } from "./team-prs/TeamPrToggle";
import { colors, highlightsSoft } from "./ui/colors";
import { Icon } from "./ui/Icon";
import { Link } from "./ui/Link";

export const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { loggedIn } = useLogin();
  const { visiblePullRequests, data } = usePullRequests();
  const { reset } = useFilters();

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
          <LeftContent>
            <BotToggle />
            <TeamToggle />
            <OrganizationSelect />
            <RepoSelect />
          </LeftContent>
          <RightContent>
            <Link onClick={reset}>Reset</Link>
          </RightContent>
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
  padding: 1.2em 1.5rem;
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

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const RightContent = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 0.9em;
  gap: 0.4rem;
`;
