/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { installationUrl } from "../Footer";
import { GitHubButton } from "../ui/GithubButton";
import { Link } from "../ui/Link";
import { useModal } from "./useModal";

export const InstallModal = () => {
  const [, showModal] = useModal();
  return (
    <>
      <p>
        Your need to install this app on your organization for it's pull
        requests to show up.
      </p>
      <p>
        If you don't have enough permissions, you can request the organization
        maintainers to approve the installation.
      </p>
      <Footer>
        <GitHubButton
          onClick={() => window.open(installationUrl)}
          text="Install app"
        />
        <Link onClick={() => showModal("tryWithoutOrgApproval")} small>
          Without organization approval
        </Link>
      </Footer>
    </>
  );
};

const Footer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
