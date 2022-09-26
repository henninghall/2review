import { rest } from "msw";
import { issues } from "./data/issues";
import { pulls } from "./data/pulls";

export const handlers = [
  rest.get("https://api.github.com/search/issues", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(issues));
  }),

  rest.get("https://api.github.com/repos/*/*/pulls/*", (req, res, ctx) => {
    const pullId = parseInt(req.params[2] as string);
    const type = issues.items.find((i) => i.id === pullId)?._2reviewType;
    if (!type) {
      return res(ctx.status(400, "No issue found with id " + pullId));
    }
    const pull = pulls[type](pullId);
    return res(ctx.status(200), ctx.json(pull));
  }),
];
