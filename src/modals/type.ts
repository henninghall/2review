import { FC } from "react";

export type Modal = "settings" | "install" | "tryWithoutOrgApproval" | "help";

export type ModalData = { title: string; content: FC };
