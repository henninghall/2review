import styled from "styled-components";
import { Reviewers } from "./Reviewers";
import pr from "./svg/pr.svg";
import { colors, highlights } from "./ui/colors";
import { PullRequest as PullRequestType } from "./usePullRequests";
import Skeleton from "react-loading-skeleton";
import React, { useRef } from "react";

type Props = {
  pullRequest?: PullRequestType;
  loading: boolean;
  preview: boolean;
  index: number;
};

const lenghts = [3, 5, 9, 1, 6, 7, 2, 4, 8, 0];

export const PullRequest = React.memo((props: Props) => {
  const { loading, pullRequest, preview } = props;
  const percent = 60 + (40 * lenghts[props.index]) / 10;

  return (
    <Row
      href={pullRequest?.html_url ?? undefined}
      $loading={loading}
      preview={preview}
    >
      <Icon />
      <PrTitle>
        {pullRequest?.title ? (
          pullRequest.title
        ) : (
          <Skeleton width={`${percent}%`} enableAnimation={loading} />
        )}
      </PrTitle>
      <Reviewers
        loading={loading}
        preview={preview}
        reviewers={
          pullRequest ? [...pullRequest.person, ...pullRequest.teams] : []
        }
      />
    </Row>
  );
});

const size = 30;

const Icon = styled.img.attrs({ src: pr, alt: "open pull request" })`
  width: ${size}px;
  height: ${size}px;
`;

const PrTitle = styled.h3`
  flex: 3;
  margin: 0;
`;

const Row = styled.a<{ $loading: boolean; preview: boolean }>`
  background-color: ${colors.gray500};
  border-radius: 6px;
  padding: 3vh 4vw;
  box-shadow: 0 2px 5px #111;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  :hover {
    ${({ $loading, preview }) => ($loading || preview ? undefined : highlights)}
  }
`;
