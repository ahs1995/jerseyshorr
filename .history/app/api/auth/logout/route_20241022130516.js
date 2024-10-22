// import { NextResponse } from "next/server";

// export async function GET() {
//   // Clear the JWT cookie by setting it to 'loggedOut' with a short expiration
//   const response = NextResponse.json({ status: "success" });

//   response.cookies.set("jwt", "loggedOut", {
//     httpOnly: true,
//     expires: new Date(Date.now() + 10 * 1000), // expires in 10 seconds
//   });

//   return response;
// }

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
