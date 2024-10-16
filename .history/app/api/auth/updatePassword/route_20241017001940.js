import User from "@/models/User";
import { createSendToken } from "@/utils/auth/createSendToken";
import { protectRoute } from "@/utils/auth/middleware";
import bcrypt from "bcrypt";
import { dbConnect } from "@/utils/mongodb";

export async function PATCH(req) {
  try {
    await dbConnect();

    //1 Find the user by user id
    // const user = await User.findById(req.user.id).select("+password");

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

    const { currentPassword, newPassword, passwordConfirm } = body;

    // 1. Check if the current password is provided
    if (!currentPassword || !newPassword || !passwordConfirm) {
      return new Response(
        JSON.stringify({ message: "Please provide all required fields" }),
        { status: 400 },
      );
    }

    const curUserWithPass = await User.findById(currentUser._id).select(
      "+password",
    );

    //2 Check if provided password match with the password in the user document

    // 2. Verify the current password with bcrypt.compare
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      curUserWithPass.password,
    );

    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({ message: "Incorrect current password" }),
        { status: 401 },
      );
    }

    // 3. Check if new password and confirm password match
    if (newPassword !== passwordConfirm) {
      return new Response(
        JSON.stringify({ message: "Passwords do not match" }),
        { status: 400 },
      );
    }

    // 5. Update the password
    curUserWithPass.password = newPassword;
    curUserWithPass.passwordConfirm = passwordConfirm;

    await curUserWithPass.save();

    // 6. Generate JWT and send the response with the new token
    const responseBody = createSendToken(curUserWithPass);

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Password updated successfully!",
        ...responseBody,
      }),
      { status: 200 },
    );
  } catch (error) {
    console.log("Update password error:", error);
    return new Response(
      { status: "fail", message: error.message },
      { status: 500 },
    );
  }
}
