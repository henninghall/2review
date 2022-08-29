/* eslint-disable jsx-a11y/anchor-is-valid */
import { GitHubButton } from "../ui/GithubButton";
import { Link } from "../ui/Link";
import { useModal } from "./useModal";

export const TryWithoutOrgApproval = () => {
  const [, showModal] = useModal();
  return (
    <>
      <p>
        If you can't wait for your organization to approve the installation you
        can create a person access token instead.
      </p>
      <p>
        Organizations may allow or disallow this depending on their security
        settings, so there is no guarantee it will work.
      </p>
      <ol style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
        <li>
          Create a personal access token and select scope:{" "}
          <i>
            <code>repo</code>
          </i>
          .
          <div style={{ paddingTop: "0.7rem" }}>
            <GitHubButton
              onClick={() =>
                window.open("https://github.com/settings/tokens/new")
              }
              text="Create personal access token"
            />
          </div>
        </li>
        <li>
          <Link
            bold
            onClick={() => {
              showModal("settings");
            }}
          >
            Go to Settings
          </Link>{" "}
          and past in your token.
        </li>
      </ol>
    </>
  );
};
