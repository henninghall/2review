import { Card } from "./Card";
import { PullRequest } from "./PullRequest";
import { usePersonalOnly } from "./usePersonalOnly";
import { usePullRequests } from "./usePullRequests";

interface Props {
  preview: boolean;
}

export const PullRequests = ({ preview }: Props) => {
  const { data, loading } = usePullRequests();
  const [onlyPersonal] = usePersonalOnly();

  const pullRequests = ([] as any[]).filter((pr) =>
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

      {!preview && !loading && pullRequests.length === 0 && (
        <Card $loading={loading} preview={preview} withoutHover>
          <span style={{ fontSize: "2em" }}>🥳</span>
          <span>
            <b>Astonishing!</b>{" "}
            <span>{`No pull requests for you${
              !onlyPersonal ? " or your team" : ""
            }.`}</span>
          </span>
        </Card>
      )}
    </>
  );
};
