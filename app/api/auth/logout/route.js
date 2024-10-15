import { cookies } from "next/headers";

export async function GET() {
  try {
    //Set the cookies to loggedOut ande xpire it in 10 second
    cookies().set({
      name: "jwt",
      value: "loggedOut",
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    // Return success response
    return new Response(
      JSON.stringify({
        status: "success",
        message: "User logged out successfully!",
      }),
      { status: 200 },
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
