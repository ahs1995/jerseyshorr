import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";
import { cookies } from "next/headers";

export async function GET() {
  try {
    //Set the cookies to loggedOut ande xpire it in 10 second
    cookies().set({
      name: "jwt",
      value: "loggedOut",
      expiresIn: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });

    return new Response(
      JSON.stringify({ message: "User logged out successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.log("Logout error:", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}
