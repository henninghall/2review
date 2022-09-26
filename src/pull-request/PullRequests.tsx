import { useLogin } from "../auth/useLogin";
import { useBotPrs } from "../bot-prs/useBotPrs";
import { EmptyCard } from "../EmptyCard";
import { ErrorCard } from "../ErrorCard";
import { SkeletonCards } from "../SkeletonCards";
import { useTeamPrs } from "../team-prs/useTeamPrs";
import { PullRequest } from "./PullRequest";
import { usePullRequests } from "./usePullRequests";

export const PullRequests = () => {
  const { loggedIn } = useLogin();
  const preview = !loggedIn;

  const { loading, data, error } = usePullRequests();
  const { teamFilter } = useTeamPrs();
  const { botFilter } = useBotPrs();

  const pullRequests = data.filter(teamFilter).filter(botFilter);

  if (error) return <ErrorCard error={error} />;
  if (preview) return <SkeletonCards loading={false} preview={true} />;
  if (loading) return <SkeletonCards loading={true} preview={false} />;
  if (pullRequests.length === 0) return <EmptyCard />;

  return (
    <>
      {pullRequests?.map((d, index) => (
        <PullRequest
          index={index}
          key={d.html_url}
          pullRequest={d}
          loading={false}
          preview={false}
        />
      ))}
    </>
  );
};
