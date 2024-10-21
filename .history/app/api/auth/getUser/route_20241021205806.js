import User from "@/models/User";
import { verifyJWT } from "@/utils/auth/verifyJWT";
import { dbConnect } from "@/utils/mongodb";
import { cookies } from "next/headers";

export async function GET(req) {
  try {
    await dbConnect();

    // Get token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get("jwt");

    if (!token) {
      return new Response(
        JSON.stringify({
          status: "fail",
          message: "You are not logged in. Please log in to get access",
        }),
        { status: 401 },
      );
    }

    const decoded = await verifyJWT(token.value);

    if (!decoded?.id) {
      return new Response(
        JSON.stringify({
          status: "Fail",
          message: "Invalid token. Please log in again",
        }),
        { status: 401 },
      );
    }

    // Find current user
    const currentUser = await User.findById(decoded.id).select(
      "-password -passwordConfirm",
    );

    if (!currentUser) {
      return new Response(
        JSON.stringify({
          status: "Fail",
          message: "The user belonging to this token no longer exists",
        }),
        { status: 401 },
      );
    }

    // Send response
    return new Response(
      JSON.stringify({
        status: "Success",
        data: {
          user: currentUser,
        },
      }),
      { status: 200 },
    );
  } catch (error) {
    console.log("Get current user API error", error);
    return new Response(
      JSON.stringify({
        status: "error",
        message: "error getting user data. Please try again later",
      }),
      { status: 500 },
    );
  }
}
