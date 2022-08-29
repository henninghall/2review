import { SignOutButton } from "../auth/SignOutButton";
import { useRefreshToken } from "../auth/useRefreshToken";
import { useToken } from "../auth/useToken";
import { Input } from "../ui/Input";

export const SettingsModal = () => {
  const [token, setToken] = useToken();
  const [, setRefreshToken] = useRefreshToken();

  return (
    <>
      <Input
        label="Github token"
        placeholder="Token"
        value={token ?? ""}
        onChange={(token) => {
          setRefreshToken(undefined);
          setToken(token);
        }}
      />
      <div style={{ visibility: token ? "visible" : "hidden" }}>
        <SignOutButton />
      </div>
    </>
  );
};
