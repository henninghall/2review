import { useLogin } from "../auth/useLogin";
import { Toggle } from "../ui/Toggle";
import { useTeamPrs } from "./useTeamPrs";

export const TeamPrsToggle = () => {
  const { loggedIn } = useLogin();
  const { showTeamPrs, setShowTeamPrs } = useTeamPrs();

  if (!loggedIn) return null;
  return (
    <Toggle label="Team PRs" checked={showTeamPrs} onChange={setShowTeamPrs} />
  );
};
