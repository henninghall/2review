import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { Card } from "../Card";
import { Reviewers } from "./Reviewers";
import pr from "../svg/pr.svg";
import { PullRequest as PullRequestType } from "./types";

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
    <Card
      href={pullRequest?.html_url ?? undefined}
      target="_blank"
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
    </Card>
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
