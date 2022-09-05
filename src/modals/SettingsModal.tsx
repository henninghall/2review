import { useState } from "react";
import { github } from "../api/githubApi";
import { SignOutButton } from "../auth/SignOutButton";
import { useUsername } from "../auth/useUsername";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const SettingsModal = () => {
  const username = useUsername();
  const [token, setToken] = useState(github.token.get());

  return (
    <>
      <Input
        label="Github token"
        placeholder="Token"
        value={token ?? ""}
        onChange={(token) => {
          github.token.set(token);
          setToken(token);
        }}
      />
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
      <div style={{ visibility: token ? "visible" : "hidden" }}>
        <SignOutButton />
      </div>
    </>
  );
};
