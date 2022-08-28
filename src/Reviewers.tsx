import styled from "styled-components";
import { colors } from "./ui/colors";

export const Reviewers = ({
  reviewers,
  loading,
  preview,
}: {
  reviewers: string[];
  loading: boolean;
  preview: boolean;
}) => {
  return (
    <Ul>
      {loading || preview
        ? Array.from({ length: 2 }).map(() => (
            <div style={{ height: "0.7em", backgroundColor: colors.gray400 }} />
          ))
        : reviewers.map((reviewer) => (
            <Reviewer key={reviewer}>{reviewer}</Reviewer>
          ))}
    </Ul>
  );
};

const Ul = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Reviewer = styled.li`
  margin: 0;
  font-size: 0.8em;
`;
