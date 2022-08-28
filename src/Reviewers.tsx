import Skeleton from "react-loading-skeleton";
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
      {loading || preview ? (
        <Skeleton
          count={2}
          width={"80%"}
          height="0.8em"
          enableAnimation={loading}
          baseColor={colors.gray300}
        />
      ) : (
        reviewers.map((reviewer) => (
          <Reviewer key={reviewer}>{reviewer}</Reviewer>
        ))
      )}
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
