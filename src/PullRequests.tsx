import { PullRequest } from "./PullRequest";
import { usePersonalOnly } from "./usePersonalOnly";
import { usePullRequests } from "./usePullRequests";

interface Props {
  preview: boolean;
}

export const PullRequests = ({ preview }: Props) => {
  const { data, loading } = usePullRequests();
  const [onlyPersonal, setOnlyPersonal] = usePersonalOnly();

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
