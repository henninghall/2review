import { useLogin } from "./auth/useLogin";
import { Toggle } from "./ui/Toggle";
import { usePersonalOnly } from "./usePersonalOnly";

export const PersonalToggle = () => {
  const { loggedIn } = useLogin();
  const [onlyPersonal, setOnlyPersonal] = usePersonalOnly();

  if (!loggedIn) return null;
  return (
    <Toggle
      label="Personal"
      checked={onlyPersonal}
      onChange={setOnlyPersonal}
    />
  );
};
