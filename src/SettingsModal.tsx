import Modal from "react-modal";
import { LogoutButton } from "./auth/LoginButton";
import { useToken } from "./auth/useToken";
import { useShowSettings } from "./settings/useShowSettings";
import { colors } from "./ui/colors";
import { Input } from "./ui/Input";

export const SettingsModal = () => {
  const [showSettings, setShowSettings] = useShowSettings();
  const [token, setToken] = useToken();

  return (
    <Modal
      isOpen={showSettings}
      onRequestClose={() => setShowSettings(false)}
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: {
          backgroundColor: colors.gray600,
          border: 0,
          boxShadow: "0 2px 4px #000",
          maxWidth: 500,
          width: "80vw",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          gap: 15,
          display: "flex",
          flexDirection: "column",
        },
      }}
      contentLabel="Settings"
    >
      <h2>Settings</h2>
      <Input
        label="Github token"
        placeholder="Token"
        value={token ?? ""}
        onChange={setToken}
      />
      <div>
        <LogoutButton />
      </div>
    </Modal>
  );
};

Modal.setAppElement("#root");
