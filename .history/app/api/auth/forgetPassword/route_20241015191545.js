import User from "@/models/User";
import { createSendToken } from "@/utils/auth/createSendToken";
import { dbConnect } from "@/utils/mongodb";

export async function POST(req) {
  try {
    await dbConnect();

    const { email } = await req.body;

    //1 Check if the user exists with the provided email address
    const user = await User.findOne({ email: email });

    //2 Send response if there is no user found
    if (!user) {
      return new Response(
        JSON.stringify({
          status: "fail",
          message: "No user exists with the email",
        }),
        { status: 404 },
      );
    }
    // 3 Generate token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // 3)Send the token on email

    const resetURL = `${req.protocol}:// ${req.get(
      "host",
    )}/api/auth/resetpassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH request with your new password and
    passwordConfirm to: ${resetURL}. \nIf you didn't forget your password, please ignore this
    email!`;
  } catch (error) {
    console.log("Forget password error:", error);
    return new Response(
      JSON.stringify({ status: "Fail", message: error.message }),
      { status: 500 },
    );
  }
}
