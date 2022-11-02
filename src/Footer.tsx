import styled from "styled-components";
import { useLogin } from "./auth/useLogin";
import { useModal } from "./modals/useModal";
import { colors } from "./ui/colors";
import { Link } from "./ui/Link";

export const installationUrl =
  "https://github.com/apps/2review-app/installations/new";

export const Footer = () => {
  const [, showModal] = useModal();
  const { loggedIn } = useLogin();

  const links = (
    [
      ["Why don't all PRs show up?", "", () => showModal("help"), loggedIn],
      ["Installation", "", () => showModal("install"), true],
      [
        "Github repo",
        "https://github.com/henninghall/2review",
        undefined,
        true,
      ],
      ["Settings", "", () => showModal("settings"), true],
    ] as const
  ).map(([text, href, onClick, visible]) => ({ text, href, onClick, visible }));

  return (
    <Container>
      <Links>
        {links.map(
          ({ href, onClick, visible, text }) =>
            visible && (
              <Link
                key={text}
                $padding
                href={href}
                onClick={(e) => {
                  if (!href) e.preventDefault();
                  if (onClick) onClick();
                }}
              >
                {text}
              </Link>
            )
        )}
      </Links>
    </Container>
  );
};

const Links = styled.div`
  color: ${colors.gray200};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 1rem;
  padding-bottom: 2rem;
  align-items: flex-end;
  justify-content: center;
`;
