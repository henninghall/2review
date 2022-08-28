import { useToken } from "./auth/useToken";
import { Toggle } from "./ui/Toggle";
import { usePersonalOnly } from "./usePersonalOnly";

export const PersonalToggle = () => {
  const [token] = useToken();
  const [onlyPersonal, setOnlyPersonal] = usePersonalOnly();

  if (!token) return null;
  return (
    <Toggle
      label="Personal"
      checked={onlyPersonal}
      onChange={setOnlyPersonal}
    />
  );
};
