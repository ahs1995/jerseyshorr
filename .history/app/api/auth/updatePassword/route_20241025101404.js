import { dbConnect } from "@/utils/mongodb";
import { protectRoute } from "@/utils/auth/middleware";
import User from "@/models/User";
import { createSendToken } from "@/utils/auth/createSendToken";

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

    const { passwordCurrent, password, passwordConfirm } = body;

    // 1. Check if the current password is provided
    if (!passwordCurrent || !password || !passwordConfirm) {
      return new Response(
        JSON.stringify({ message: "Please provide all required fields" }),
        { status: 400 },
      );
    }

    const curUserWithPass = await User.findById(currentUser._id).select(
      "+password",
    );

    //2 Check if provided password match with the password in the user document

    const currentPassVerify = await curUserWithPass.checkPassword(
      passwordCurrent,
      curUserWithPass.password,
    );

    if (!currentPassVerify) {
      return new Response(
        JSON.stringify({
          message: "Incorrect current password! Please try again.",
        }),
        { status: 401 },
      );
    }

    // 3. Check if new password and confirm password match
    if (password !== passwordConfirm) {
      return new Response(
        JSON.stringify({ message: "Passwords do not match" }),
        { status: 400 },
      );
    }

    // 4. Update the password
    curUserWithPass.password = password;
    curUserWithPass.passwordConfirm = passwordConfirm;

    await curUserWithPass.save();

    // 5. Generate JWT and send the response with the new token
    const responseBody = createSendToken(curUserWithPass);

    return new Response(
      JSON.stringify({
        status: "Success",
        message: "Password updated successfully!",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.log("Update password error:", error);
    return new Response(
      { status: "Fail", message: error.message },
      { status: 500 },
    );
  }
}
