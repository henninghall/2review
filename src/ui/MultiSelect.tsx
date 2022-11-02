import Select, { defaultTheme } from "react-select";
import makeAnimated from "react-select/animated";
import styled from "styled-components";
import { useLogin } from "../auth/useLogin";
import { colors } from "../ui/colors";
import "./MultiSelect.css";

const animatedComponents = makeAnimated();
interface Props<T> {
  all: T[];
  excluded: T[];
  onExcludedDataChanged: (excluded: T[]) => void;
  label: string;
}

export function MultiSelect({
  onExcludedDataChanged,
  excluded,
  all,
  label,
}: Props<string>) {
  const { loggedIn } = useLogin();
  const options = all.map(toOption);
  const selectedData = all.filter((o) => !excluded.includes(o));
  const isEverythingSelected = selectedData.length === all.length;

  if (!isEverythingSelected) {
    options.unshift({
      value: selectAllValue,
      label: "-- Select all --",
    });
  }

  if (!loggedIn) return null;

  if (all.length <= 1 && isEverythingSelected) return null;

  return (
    <Container>
      <label htmlFor={label} style={{ fontSize: "0.9em" }}>
        {label}
      </label>
      <Select
        id={label}
        key={label}
        options={options}
        isMulti
        closeMenuOnSelect={false}
        value={selectedData.map(toOption)}
        components={animatedComponents}
        hideSelectedOptions={false}
        classNamePrefix="multiselect"
        theme={theme}
        onChange={(selectedOptions) => {
          const hasClickedSelectedAll = selectedOptions.some(
            (s) => s.value === selectAllValue
          );
          if (hasClickedSelectedAll) {
            onExcludedDataChanged([]);
            return;
          }
          const selectedValues = selectedOptions.map((s) => s.value);
          const excluded = all.filter((o) => !selectedValues.includes(o));
          onExcludedDataChanged(excluded);
        }}
        onBlur={() => {
          if (!selectedData.length) onExcludedDataChanged([]);
        }}
      />
    </Container>
  );
}

const toOption = (org: string) => ({ value: org, label: org });

const selectAllValue = "#selectAll";

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: colors.yellow,
    neutral0: colors.gray300,
    primary25: colors.gray200,
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: flex-start;
`;
