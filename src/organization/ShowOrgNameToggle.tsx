import { useLogin } from "../auth/useLogin";
import { Toggle } from "../ui/Toggle";
import { useShowOrgName } from "./useShowOrgName";

export const ShowOrgNameToggle = () => {
  const { loggedIn } = useLogin();
  const { showOrgName, setShowOrgName } = useShowOrgName();

  if (!loggedIn) return null;
  return (
    <Toggle
      label="Show organization name"
      checked={showOrgName}
      onChange={setShowOrgName}
    />
  );
};
