import { issue } from "./issue";

export const issues = {
  total_count: 9,
  incomplete_results: false,
  items: [
    issue("default"),
    issue("bot"),
    issue("personal"),
    issue("organizationA"),
    issue("organizationB"),
  ],
};
