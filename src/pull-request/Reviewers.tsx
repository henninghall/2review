import styled from "styled-components";
import { colors } from "../ui/colors";
import { RawPullRequest } from "./types";

type Reviewer =
  | RawPullRequest["person"][number]
  | RawPullRequest["teams"][number];

export const Reviewers = ({
  reviewers,
  loading,
  preview,
}: {
  reviewers: Reviewer[];
  loading: boolean;
  preview: boolean;
}) => {
  return (
    <Ul>
      {loading || preview
        ? Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              style={{ height: "0.7em", backgroundColor: colors.gray400 }}
            />
          ))
        : reviewers.map((reviewer, i) => (
            <ReviewerRow key={i} reviewer={reviewer} />
          ))}
    </Ul>
  );
};

const ReviewerRow = ({ reviewer }: { reviewer: Reviewer }) => {
  return (
    <Container>
      <Avatar src={reviewer.avatarUrl} isTeam={reviewer.type === "team"} />
      <Name>{reviewer.name}</Name>
    </Container>
  );
};

const avatarSize = 15;

const Avatar = styled.img<{ isTeam: boolean }>`
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  border-radius: ${({ isTeam }) => (isTeam ? "6px" : "50%")};
  border: 1px solid ${colors.gray500};
`;

const Ul = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Container = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  display: flex;
  gap: 0.4rem;
`;

const Name = styled.span`
  font-size: 0.8em;
`;
