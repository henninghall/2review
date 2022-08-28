export function Checkbox({
  checked,
  onChange,
  label,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        style={{ marginRight: 10 }}
      />
      {label}
    </label>
  );
}
