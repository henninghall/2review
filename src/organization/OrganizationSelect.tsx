import Select, { defaultTheme } from "react-select";
import makeAnimated from "react-select/animated";
import { usePullRequests } from "../pull-request/usePullRequests";
import { colors } from "../ui/colors";
import { exists, onlyUnique } from "../utils";
import "./select.css";
import { useOrganizationFilter } from "./useOrganizationFilter";

const animatedComponents = makeAnimated();

export const OrganizationSelect = () => {
  const { excludedOrganizations, setExcludedOrganizations } =
    useOrganizationFilter();
  const { data: prs } = usePullRequests();
  const allOrgs = prs
    .map((pr) => pr.owner)
    .filter(onlyUnique)
    .filter(exists);
  const options = allOrgs.map(toOption);
  const selectedOrgs = allOrgs.filter(
    (o) => !excludedOrganizations.includes(o)
  );
  const allSelected = selectedOrgs.length === allOrgs.length;

  if (!allSelected) {
    options.unshift({
      value: selectAllValue,
      label: "-- Select all --",
    });
  }

  return (
    <Select
      options={options}
      isMulti
      value={selectedOrgs.map(toOption)}
      components={animatedComponents}
      hideSelectedOptions={false}
      classNamePrefix="organization-select"
      theme={{
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          primary: colors.yellow,
          neutral0: colors.gray400,
          primary25: colors.gray300,
        },
      }}
      onChange={(selectedValues) => {
        const hasClickedSelectedAll = selectedValues.some(
          (s) => s.value === selectAllValue
        );
        if (hasClickedSelectedAll) {
          setExcludedOrganizations([]);
          return;
        }
        const selectedOrgs = selectedValues.map((s) => s.value);
        const excluded = allOrgs.filter((o) => !selectedOrgs.includes(o));
        setExcludedOrganizations(excluded);
      }}
      onBlur={() => {
        if (!selectedOrgs.length) setExcludedOrganizations([]);
      }}
    />
  );
};

const toOption = (org: string) => ({ value: org, label: org });

const selectAllValue = "#selectAll";
