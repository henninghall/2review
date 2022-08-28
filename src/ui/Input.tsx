import styled from "styled-components";
import { colors } from "./colors";

export function Input({
  value,
  onChange,
  label,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
}) {
  return (
    <Label>
      {label}
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        size={40}
      />
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  gap: 15;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  background-color: ${colors.gray500};
  border-radius: 8px;
  padding: 7px 0px 7px 10px;
  color: ${colors.gray100};
`;
