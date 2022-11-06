import { issue, _2reviewType } from "./issue";
import { pulls } from "./pulls";

export const issues = {
  total_count: 9,
  incomplete_results: false,
  items: (Object.keys(pulls) as _2reviewType[]).map(issue),
};
