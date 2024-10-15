import User from "@/models/User";
import { createSendToken } from "@/utils/auth/createSendToken";
import { dbConnect } from "@/utils/mongodb";

export async function POST(req) {
  try {
    await dbConnect();

    //1 Find the user by user id
    const user = await User.findById(req.user.id).select("+password");

    //2 Check if provided password match with the password in the user document

    if (!user.checkPassword(req.body.passwordCurrent, user.password)) {
      return new Response(
        JSON.stringify({
          status: "fail",
          message: "You have provided a wrong password",
        }),
        { status: 401 },
      );
    }

    //3 Set the new password in the doc
    (user.password = req.body.password),
      (user.passwordConfirm = req.body.passwordConfirm);

    await user.save();

    //4 Send response with the newly generated token
    createSendToken(user);
  } catch (error) {
    console.log("Update password error:", error);
    return new Response(
      { status: "fail", message: error.message },
      { status: 500 },
    );
  }
}
