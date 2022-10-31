import { useLogin } from "../auth/useLogin";
import { EmptyCard } from "../EmptyCard";
import { ErrorCard } from "../ErrorCard";
import { SkeletonCards } from "../SkeletonCards";
import { PullRequest } from "./PullRequest";
import { usePullRequests } from "./usePullRequests";

export const PullRequests = () => {
  const { loggedIn } = useLogin();
  const preview = !loggedIn;

  const { loading, visiblePullRequests, error } = usePullRequests();

  if (error) return <ErrorCard error={error} />;
  if (preview) return <SkeletonCards loading={false} preview={true} />;
  if (loading) return <SkeletonCards loading={true} preview={false} />;
  if (visiblePullRequests.length === 0) return <EmptyCard />;

  return (
    <>
      {visiblePullRequests?.map((d, index) => (
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
