import styled from "styled-components";
import { colors } from "./colors";

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})<{
  $padding?: boolean;
  bold?: boolean;
  small?: boolean;
}>`
  color: ${colors.gray200};
  padding: ${({ $padding }) => ($padding ? "1.5rem" : 0)};
  font-size: ${({ small }) => (small ? 0.85 : 1)}em;
  font-weight: ${({ bold }) => (bold ? "bold" : "inherit")};
  cursor: pointer;
  :hover {
    color: ${colors.gray100};
  }
`;
