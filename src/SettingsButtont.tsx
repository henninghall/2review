import settings from "./svg/settings.svg";

export const SettingsButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <img
      src={settings}
      alt="settings"
      style={{
        cursor: "pointer",
      }}
      onClick={() => onClick()}
    />
  );
};
