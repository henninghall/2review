import styled from "styled-components";
import { colors, highlights } from "./colors";

export const Card = styled.a<{
  $loading: boolean;
  preview: boolean;
  withoutHover?: boolean;
  yellowIndicator?: boolean;
}>`
  background-color: ${colors.gray500};
  border-radius: 6px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 5px #111;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  :hover {
    ${({ $loading, preview, withoutHover }) =>
      $loading || preview || withoutHover ? undefined : highlights}
  }
  border: 10px solid
    ${({ yellowIndicator }) =>
      yellowIndicator ? colors.yellow : colors.gray500};
  border-width: 0 0.4rem 0 0;
  &:visited {
    border-color: ${colors.gray500};
  }
  &:link {
    border-color: ${colors.yellow};
  }
  .dot {
    font-size: 8px;
  }
`;
