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
  organizationA: (id: number) => {
    const pull = getPull(id);
    pull.title = "Organization A";
    pull.head.repo.owner.type = "Organization";
    pull.head.repo.owner.login = "OrgA";
    pull.base.repo.owner.type = "Organization";
    pull.base.repo.owner.login = "OrgA";
    return pull;
  },
  organizationB: (id: number) => {
    const pull = getPull(id);
    pull.title = "Organization B";
    pull.head.repo.owner.type = "Organization";
    pull.head.repo.owner.login = "OrgB";
    pull.base.repo.owner.type = "Organization";
    pull.base.repo.owner.login = "OrgB";
    return pull;
  },
};
