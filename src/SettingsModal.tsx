import { SignOutButton } from "./auth/SignOutButton";
import { useToken } from "./auth/useToken";
import { Modal } from "./Modal";
import { useShowSettings } from "./settings/useShowSettings";
import { Input } from "./ui/Input";

export const SettingsModal = () => {
  const [showSettings, setShowSettings] = useShowSettings();
  const [token, setToken] = useToken();

  return (
    <Modal
      isOpen={showSettings}
      onClose={() => setShowSettings(false)}
      title={"Settings"}
    >
      <Input
        label="Github token"
        placeholder="Token"
        value={token ?? ""}
        onChange={setToken}
      />
      <div>
        <SignOutButton />
      </div>
    </Modal>
  );
};
