import { PullRequest } from "./pull-request/PullRequest";

interface Props {
  loading: boolean;
  preview: boolean;
}

export const SkeletonCards = ({ loading, preview }: Props) => {
  return (
    <>
      {Array.from({ length: 7 }).map((_, i) => (
        <PullRequest key={i} loading={loading} preview={preview} index={i} />
      ))}
    </>
  );
};
