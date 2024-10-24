import { createSendToken } from "@/utils/auth/createSendToken";
import { protectRoute } from "@/utils/auth/middleware";
import { dbConnect } from "@/utils/mongodb";

export async function PATCH(req) {
  try {
    await dbConnect();

    const currentUser = await protectRoute(req);

    if (!currentUser) {
      return new Response(
        JSON.stringify({
          status: "Fail",
          message: "You are not logged in. Please login to get access",
        }),
        { status: 401 },
      );
    }

    const body = await req.json();

    const { name, email } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ message: "Please provide all required fields" }),
        { status: 400 },
      );
    }

    currentUser.name = name;
    currentUser.email = email;

    await currentUser.save({
      validateBeforeSave: false,
    });

    const responseBody = createSendToken(currentUser);

    return new Response(
      JSON.stringify({
        status: "Success",
        message: "User details updated succesfully!",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.log("User update error:", error.message);
    return new Response(
      JSON.stringify({ status: "Fail", message: error.message }),
      { status: 400 },
    );
  }
}
