import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { useShowOrgName } from "../organization/useShowOrgName";
import pr from "../svg/pr.svg";
import { Card } from "../ui/Card";
import { colors } from "../ui/colors";
import { exists } from "../utils";
import { Reviewers } from "./Reviewers";
import { PullRequest as PullRequestType } from "./types";

type Props = {
  pullRequest?: PullRequestType;
  loading: boolean;
  preview: boolean;
  index: number;
  new?: boolean;
};

const lenghts = [3, 5, 9, 1, 6, 7, 2, 4, 8, 0];

export const PullRequest = React.memo((props: Props) => {
  let { loading, pullRequest, preview } = props;
  const percent = 60 + (40 * lenghts[props.index]) / 10;
  const { html_url, title } = pullRequest ?? {};
  const { showOrgName } = useShowOrgName();

  return (
    <Card
      href={html_url ?? undefined}
      target="_blank"
      $loading={loading}
      preview={preview}
      yellowIndicator={props.new}
    >
      <Icon />
      <Info>
        <Title>
          {title ?? (
            <Skeleton width={`${percent}%`} enableAnimation={loading} />
          )}
        </Title>
        <Space />
        <SubTitle>
          {pullRequest ? (
            <>
              {showOrgName && (
                <>
                  <RepoName>{pullRequest.owner}</RepoName>
                  <Slash>/</Slash>
                </>
              )}
              {pullRequest.base.repo.name}
            </>
          ) : (
            <Skeleton width={`${percent / 2}%`} enableAnimation={loading} />
          )}
        </SubTitle>
      </Info>

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

const Info = styled.div`
  flex: 3;
  margin: 0;
`;

const RepoName = styled.span`
  color: ${colors.gray200};
`;

const Title = styled.h3``;

const Slash = styled.span`
  color: ${colors.gray200};
`;

const SubTitle = styled.h4`
  font-size: 0.9em;
  color: ${colors.gray200};
`;

const Space = styled.div`
  height: 5px;
`;
