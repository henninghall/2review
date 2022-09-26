import { getPull } from "./pull";
import { reviewer } from "./reviewer";
import { team } from "./team";

export const pulls = {
  bot: (id: number) => {
    const pull = getPull(id);
    pull.requested_teams = [team];
    pull.title = "[Bot] Bump dependencies";
    pull.user.type = "Bot";
    return pull;
  },
  default: (id: number) => {
    const pull = getPull(id);
    pull.requested_teams = [team];
    pull.user.login = "A random user";
    pull.title = "Fix everything";
    return pull;
  },
  personal: (id: number) => {
    const pull = getPull(id);
    pull.title = "Personal reviewer";
    pull.requested_reviewers = [reviewer];
    return pull;
  },
};
