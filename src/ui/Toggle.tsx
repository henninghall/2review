import "./Toggle.css";

export function Toggle({
  checked,
  onChange,
  label,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="toggles">
      <input
        type="checkbox"
        name={label}
        id={label}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <label htmlFor={label} style={{ fontSize: "0.9em" }}>
        {label}
      </label>
    </div>
  );
}
