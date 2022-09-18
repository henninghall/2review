import { usePersonalOnly } from "./personal-prs/usePersonalOnly";
import { Card } from "./ui/Card";

export const EmptyCard = () => {
  const { onlyPersonal } = usePersonalOnly();

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
          <h3>Astonishing!</h3>
          <span>{`No pull requests for you${
            !onlyPersonal ? " or your team" : ""
          }.`}</span>
        </div>
      </div>
    </Card>
  );
};
