import { useLogin } from "../auth/useLogin";
import { Toggle } from "../ui/Toggle";
import { useBotPrs } from "./useBotPrs";

export const BotToggle = () => {
  const { loggedIn } = useLogin();
  const { showBotPrs, setShowBotPrs } = useBotPrs();

  if (!loggedIn) return null;
  return (
    <Toggle label="Bot PRs" checked={showBotPrs} onChange={setShowBotPrs} />
  );
};
