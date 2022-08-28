import { useEffect } from "react";
import { LoginButton } from "./auth/LoginButton";
import { state } from "./auth/state";
import { useIsAuthorizing } from "./auth/useIsAutherizing";
import { useToken } from "./auth/useToken";
import { fetchJson } from "./fetchjson";
import { PullRequests } from "./PullRequests";
import { useShowSettings } from "./settings/useShowSettings";
import { SettingsButton } from "./SettingsButtont";
import { SettingsModal } from "./SettingsModal";
import { Checkbox } from "./ui/Checkbox";
import { useLocalStorage } from "./useLocalStorage";

interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

export function App() {
  const [token, setToken] = useToken();
  const [onlyPersonal, setOnlyPersonal] = useLocalStorage<boolean>(
    "onlyPersonal",
    false
  );
  const [, setShowSettings] = useShowSettings();
  const [, setIsAuth] = useIsAuthorizing();

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    const receivedState = currentSearchParams.get("state");
    const code = currentSearchParams.get("code");
    const shouldLogin = receivedState && code;
    if (!shouldLogin) return;
    if (state !== receivedState) {
      throw Error("States not matching. Aborting auth.");
    }
    setIsAuth(true);

    fetchJson<LoginResponse>(`https://2review.app/api/login`, {
      method: "post",
      body: JSON.stringify({
        state,
        code,
        redirect_uri: window.location.origin,
      }),
    })
      .then((response) => {
        if (response.access_token) setToken(response.access_token);
      })
      .finally(() => {
        window.location.href = window.location.origin;
        setIsAuth(false);
      });
  }, [setIsAuth, setToken]);

  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px 3vw",
      }}
    >
      <SettingsModal />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          backgroundColor: "transparent",
          width: "100%",
          maxWidth: 800,
          marginTop: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <h2 style={{ margin: 0 }}>Pull requests awaiting your review</h2>
          <Checkbox
            label="Personal"
            checked={onlyPersonal}
            onChange={setOnlyPersonal}
          />
        </div>
        <PullRequests onlyPersonal={onlyPersonal} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 20,
          }}
        >
          {token ? (
            <SettingsButton
              onClick={() => setShowSettings((shown) => !shown)}
            />
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </div>
  );
}
