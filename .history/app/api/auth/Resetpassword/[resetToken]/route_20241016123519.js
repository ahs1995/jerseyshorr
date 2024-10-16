import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";
import crypto from "crypto";

export async function PATCH(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const { password, passwordConfirm } = body;
    // 1.Get user based on token
    //1.1 Encrypt the token in the URL param
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
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

    // 3.Update changedPasswordAt property for the user

    // 4.Log the user in. Send JWT.
  } catch (error) {
    console.log(error);
  }
}
