export async function GET(req) {
  try {
    // Set the Set-Cookie header to expire the JWT cookie
    return new Response(
      JSON.stringify({
        status: "success",
        message: "User logged out successfully!",
      }),
      {
        status: 200,
        headers: {
          "Set-Cookie": `jwt=; Path=/; Expires=${new Date(0).toUTCString()}; HttpOnly; Secure; SameSite=Strict`,
        },
      },
    );
  } catch (error) {
    console.log("Logout error:", error);
    return new Response(
      JSON.stringify({ status: "fail", message: error.message }),
      {
        status: 500,
      },
    );
  }
}
