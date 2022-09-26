import { useState } from "react";
import { github } from "../api/githubApi";
import { SignOutButton } from "../auth/SignOutButton";
import { useLogin } from "../auth/useLogin";
import { useUsername } from "../auth/useUsername";
import { issue } from "../mocks/data/issue";
import { issues } from "../mocks/data/issues";
import { useServerMocking } from "../mocks/useServerMocking";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Toggle } from "../ui/Toggle";
import { isDev } from "../useDev";

export const SettingsModal = () => {
  const username = useUsername();
  const { setLoggedIn } = useLogin();
  const [token, setToken] = useState(github.token.get());
  const serverMocking = useServerMocking();

  return (
    <>
      <Input
        label="Github token"
        placeholder="Token"
        value={token ?? ""}
        onBlur={() => {
          github.token.set(token);
          setLoggedIn(!!token);
        }}
        onChange={setToken}
      />
      {isDev && (
        <>
          <Button
            onClick={() => {
              github.token.set("x");
              setToken("x");
            }}
            text="Invalidate auth token"
          />
          <Button
            onClick={() => {
              github.refreshToken.set("x");
            }}
            text="Invalidate refresh token"
          />
          <Button
            onClick={() => {
              username.clear();
            }}
            text="Remove username"
          />
          <Toggle
            label={"Mock server"}
            checked={serverMocking.enabled}
            onChange={serverMocking.toggle}
          />
          {serverMocking.enabled && (
            <Button
              onClick={() => {
                setTimeout(() => {
                  issues.items.push(issue("bot"));
                }, 3000);
              }}
              text="Add new PR in 3 seconds"
            />
          )}
        </>
      )}

      <div style={{ visibility: token ? "visible" : "hidden" }}>
        <SignOutButton />
      </div>
    </>
  );
};
