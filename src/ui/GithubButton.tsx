import { Button, ButtonProps } from "./Button";
import { Icon } from "./Icon";

export const GitHubButton = (props: ButtonProps) => (
  <Button {...props}>
    <Icon name="github" />
  </Button>
);
