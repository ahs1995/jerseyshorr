import User from "@/models/User";
import { createSendToken } from "@/utils/auth/createSendToken";
import { dbConnect } from "@/utils/mongodb";

export async function POST(req) {
  try {
    await dbConnect();

    const { email } = await req.body;

    //1 Check if the user exists with the provided email address
    const user = await User.findOne({ email: email });
  } catch (error) {
    console.log("Forget password error:", error);
    return new Response(
      JSON.stringify({ status: "Fail", message: error.message }),
      { status: 500 },
    );
  }
}
