export async function GET(req, res) {
  return new Response("Logout successful", {
    status: 200,
    headers: {
      "Set-Cookie":
        "jwt=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict",
    },
  });
}
