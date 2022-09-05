import styled from "styled-components";
import { colors, highlights } from "./colors";

export const Card = styled.a<{
  $loading: boolean;
  preview: boolean;
  withoutHover?: boolean;
}>`
  background-color: ${colors.gray500};
  border-radius: 6px;
  padding: 3vh 4vw;
  box-shadow: 0 2px 5px #111;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  :hover {
    ${({ $loading, preview, withoutHover }) =>
      $loading || preview || withoutHover ? undefined : highlights}
  }
`;
