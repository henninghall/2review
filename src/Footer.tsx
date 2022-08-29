import styled from "styled-components";
import { useToken } from "./auth/useToken";
import { useModal } from "./modals/useModal";
import { colors } from "./ui/colors";
import { Link } from "./ui/Link";

export const installationUrl =
  "https://github.com/apps/2review-app/installations/new";

export const Footer = () => {
  const [, showModal] = useModal();
  const [token] = useToken();

  return (
    <Container>
      <Links>
        {token && (
          <Link $padding onClick={() => showModal("help")}>
            Why don't all PR's show up?
          </Link>
        )}
        <Link $padding onClick={() => showModal("install")}>
          Installation
        </Link>
        <Link $padding href="https://github.com/henninghall/2review">
          Github repo
        </Link>
        <Link $padding onClick={() => showModal("settings")}>
          Settings
        </Link>
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
