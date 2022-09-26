import { useLogin } from "../auth/useLogin";
import { useBotPrs } from "../bot-prs/useBotPrs";
import { EmptyCard } from "../EmptyCard";
import { ErrorCard } from "../ErrorCard";
import { usePersonalOnly } from "../personal-prs/usePersonalOnly";
import { SkeletonCards } from "../SkeletonCards";
import { usePullRequests } from "./usePullRequests";
import { PullRequest } from "./PullRequest";

export const PullRequests = () => {
  const { loggedIn } = useLogin();
  const preview = !loggedIn;

  const { loading, data, error } = usePullRequests();
  const { personalFilter } = usePersonalOnly();
  const { botFilter } = useBotPrs();

  const pullRequests = data.filter(personalFilter).filter(botFilter);

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
