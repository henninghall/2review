import { PullRequest } from "./PullRequest";
import { usePullRequests } from "./usePullRequests";

interface Props {
  onlyPersonal: boolean;
  preview: boolean;
}

export const PullRequests = ({ onlyPersonal, preview }: Props) => {
  const { data, loading } = usePullRequests();
  const pullRequests = data?.filter((pr) =>
    onlyPersonal ? pr.person.length : true
  );

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
      {(preview || loading) &&
        Array.from({ length: 7 }).map((_, i) => (
          <PullRequest key={i} loading={loading} preview={preview} index={i} />
        ))}
    </>
  );
};
