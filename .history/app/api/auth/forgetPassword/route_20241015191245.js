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

    return new Response(
      JSON.stringify({
        status: "fail",
        message: "No user exists with the email",
      }),
      { status: 404 },
    );

    // 3 Generate token
    const resetToken = user.createPasswordResetToken();
  } catch (error) {
    console.log("Forget password error:", error);
    return new Response(
      JSON.stringify({ status: "Fail", message: error.message }),
      { status: 500 },
    );
  }
}
