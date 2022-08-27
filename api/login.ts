import { login } from "./doLogin";

export default async function handler(request, response) {
  console.log(request);

  // await login()
  response.status(200).json({
    success: true,
    // body: request.body,
    // query: request.query,
    // cookies: request.cookies,
  });
}
