import { useTeamPrs } from "./team-prs/useTeamPrs";
import { Card } from "./ui/Card";

export const EmptyCard = () => {
  const { showTeamPrs } = useTeamPrs();

  return (
    <Card $loading={false} preview={false} withoutHover>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "2em" }}>🥳</span>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span>{`No pull requests for you${
            showTeamPrs ? " or your team" : ""
          }.`}</span>
        </div>
      </div>
    </Card>
  );
};
