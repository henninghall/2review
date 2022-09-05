import { useLogin } from "../auth/useLogin";
import { EmptyCard } from "../EmptyCard";
import { ErrorCard } from "../ErrorCard";
import { SkeletonCards } from "../SkeletonCards";
import { usePersonalOnly } from "../usePersonalOnly";
import { PullRequest } from "./PullRequest";
import { usePullRequests } from "./usePullRequests";

export const PullRequests = () => {
  const { loggedIn } = useLogin();
  const preview = !loggedIn;

  const { loading, data, error } = usePullRequests();
  const [onlyPersonal] = usePersonalOnly();

  const pullRequests = data.filter((pr) =>
    onlyPersonal ? pr.person.length : true
  );

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
