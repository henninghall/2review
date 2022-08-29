import { Card } from "./Card";

export const ErrorCard = ({ error }: { error: Error }) => {
  return (
    <Card $loading={false} preview={false} withoutHover>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <span>Something went wrong.</span>
        <span style={{ fontSize: "0.8em" }}>
          Error message: {error.message}
        </span>
      </div>
    </Card>
  );
};
