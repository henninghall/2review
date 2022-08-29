import { installationUrl } from "./Footer";
import { Modal } from "./Modal";
import { useShowHelp } from "./settings/useShowHelp";
import { useShowInstall } from "./settings/useShowInstall";
import { GitHubButton } from "./ui/GithubButton";

export const HelpModal = () => {
  const [show, setShow] = useShowHelp();

  return (
    <InstallModal
      show={show}
      setShow={setShow}
      title="Why don't all PR's show up?"
    />
  );
};

export const InstallationModal = () => {
  const [show, setShow] = useShowInstall();
  return <InstallModal show={show} setShow={setShow} title="Installation" />;
};

const InstallModal = ({
  title,
  show,
  setShow,
}: {
  title: string;
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  return (
    <Modal isOpen={show} onClose={() => setShow(false)} title={title}>
      <p>
        Your need to install this app on your organization(s) for it's PR's to
        show up.
      </p>
      <p>
        If you don't have enough permissions, you can request the organization
        maintainers to approve the installation.
      </p>
      <div>
        <GitHubButton
          onClick={() => window.open(installationUrl)}
          text="Install app"
        />
      </div>
    </Modal>
  );
};
