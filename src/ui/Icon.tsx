import styled from "styled-components";
import chevronDown from "../svg/chevron-down.svg";
import chevronUp from "../svg/chevron-up.svg";
import filter from "../svg/filter.svg";
import github from "../svg/github.svg";
import settings from "../svg/settings.svg";
import reset from "../svg/reset.svg";

const icons = {
  github,
  chevronUp,
  chevronDown,
  filter,
  settings,
  reset,
};

const sizes = {
  s: 15,
  m: 25,
  l: 40,
};

interface Props {
  name: keyof typeof icons;
  size?: keyof typeof sizes;
}

export const Icon = (props: Props) => {
  const { name, size } = props;
  const src = icons[name];
  return <Img src={src} alt={name} size={size ?? "m"} />;
};

const Img = styled.img<Required<Pick<Props, "size">>>`
  width: ${({ size }) => sizes[size]}px;
  height: ${({ size }) => sizes[size]}px;
`;
