export default function handler(request, response) {
  response.status(200).json({
    success: true,
    // body: request.body,
    // query: request.query,
    // cookies: request.cookies,
  });
}
