import User from "@/models/User";
import { createSendToken } from "@/utils/auth/createSendToken";
import { dbConnect } from "@/utils/mongodb";
import * as crypto from "crypto";

export async function PATCH(req, { params }) {
  try {
    await dbConnect();

    const body = await req.json();

    const { password, passwordConfirm } = body;
    // 1.Get user based on token
    //1.1 Encrypt the token in the URL param
    const hashedToken = crypto
      .createHash("sha256")
      .update(params.token)
      .digest("hex");

    const user = User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return new Response(
        JSON.stringify({
          status: "Fail",
          message: "Token is invalid or expired",
        }),
        { status: 400 },
      );
    }

    // 2.If token has not expired and there is user, set the new password
    user.password = password;
    user.passwordConfirm = passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    // 3.Update changedPasswordAt property for the user

    // 4.Log the user in. Send JWT.
    const responseBody = createSendToken(user);
    return new Response(
      JSON.stringify({
        status: "Success",
        message: "Password reset successfull!",
      }),
      { status: 200 },
    );
    return;
  } catch (error) {
    console.log(error);
  }
}
