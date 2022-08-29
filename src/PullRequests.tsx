import { EmptyCard } from "./EmptyCard";
import { ErrorCard } from "./ErrorCard";
import { PullRequest } from "./PullRequest";
import { usePersonalOnly } from "./usePersonalOnly";
import { usePullRequests } from "./usePullRequests";

interface Props {
  preview: boolean;
}

export const PullRequests = ({ preview }: Props) => {
  const { loading, data, error } = usePullRequests();
  const [onlyPersonal] = usePersonalOnly();

  const pullRequests = data.filter((pr) =>
    onlyPersonal ? pr.person.length : true
  );

  if (error) return <ErrorCard error={error} />;

  if (preview || loading) {
    return (
      <>
        {Array.from({ length: 7 }).map((_, i) => (
          <PullRequest key={i} loading={loading} preview={preview} index={i} />
        ))}
      </>
    );
  }

  if (pullRequests.length === 0) {
    return <EmptyCard />;
  }

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
