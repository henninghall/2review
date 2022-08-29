import { InstallModal } from "./InstallModal";
import { SettingsModal } from "./SettingsModal";
import { TryWithoutOrgApproval } from "./TryWithoutOrgApproval";
import { Modal, ModalData } from "./type";

export const modals: Record<Modal, ModalData> = {
  settings: { title: "Settings", content: SettingsModal },

  install: { title: "Installation", content: InstallModal },
  tryWithoutOrgApproval: {
    title: "Usage without organization approval",
    content: TryWithoutOrgApproval,
  },
  help: { title: "Why don't all PR's show up?", content: InstallModal },
};
