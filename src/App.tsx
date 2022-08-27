import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";
import pr from "./svg/pr.svg";
import settings from "./svg/settings.svg";
import { useLocalStorage } from "./useLocalStorage";
const size = 30;
export function App() {
  const [data, setData] = useState<Awaited<ReturnType<typeof fetchData>>>();
  const [token, setToken] = useLocalStorage<string>("token", "");
  const [username, setUsername] = useLocalStorage<string>("username", "");
  const [onlyPersonal, setOnlyPersonal] = useLocalStorage<boolean>(
    "onlyPersonal",
    false
  );
  const hasCompletedSetup = token && username;
  const [showSettings, setShowSettings] = useLocalStorage<boolean>(
    "setup",
    !hasCompletedSetup
  );

  useEffect(() => {
    if (!token) return;
    if (!username) return;
    fetchData({ token, username }).then(setData);
  }, [token, username]);

  const rows = data?.filter((d) => (onlyPersonal ? d.person.length : true));

  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 20,
        marginTop: 0,
        marginBottom: 40,
      }}
    >
      <img
        src={settings}
        alt="settings"
        style={{
          position: "absolute",
          right: 15,
          top: 15,
          cursor: "pointer",
        }}
        onClick={() => setShowSettings((shown) => !shown)}
      />
      <h1>2 review</h1>
      {showSettings && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            gridTemplateColumns: "1fr",
          }}
        >
          <Input
            label="Github username"
            placeholder="Username"
            value={username}
            onChange={setUsername}
          />
          <Input
            label="Github token"
            placeholder="Token"
            value={token}
            onChange={setToken}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          backgroundColor: "transparent",
          width: "100%",
          maxWidth: 800,
          marginTop: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ margin: 0 }}>Pull requests awaiting your review</h2>
          <Checkbox
            label="Only personal"
            checked={onlyPersonal}
            onChange={setOnlyPersonal}
          />
        </div>

        {rows?.map((d) => {
          const reviewers = [...d.person, ...d.teams];
          return (
            <div
              style={{
                backgroundColor: "#363636",
                borderRadius: 10,
                padding: "10px 50px",
                boxShadow: "0 2px 5px #111",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 30,
              }}
              onClick={() => {
                window.open(d.html_url);
              }}
            >
              <img
                src={pr}
                alt="open pull request"
                style={{ width: size, height: size }}
              />
              <h3 style={{ flex: 3 }}>{d.title}</h3>
              <ul style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {reviewers.map((r) => {
                  return (
                    <li style={{ margin: 0, marginBottom: 4, fontSize: 16 }}>
                      {r}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Input({
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
    <label
      style={{
        display: "flex",
        gap: 15,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {label}
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          backgroundColor: "#363636",
          borderRadius: 8,
          padding: "7px 0px 7px 10px",
          color: "#B5B5B5",
        }}
      />
    </label>
  );
}

function Checkbox({
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
