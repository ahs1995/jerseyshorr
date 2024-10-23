import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";
import { createSendToken } from "@/utils/auth/createSendToken";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const { email, password } = body;

    // Check if email and password exists

    if (!email || !password) {
      return new Response(
        JSON.stringify({ messsage: "All fields are required" }),
        {
          status: 400,
        },
      );
    }

    //2 Check if user exists or password is correct

    // 2.1 Find the specific user document with the provided email and password

    const user = await User.findOne({ email }).select("+password");

    // 2.2

    if (!user || !(await user.checkPassword(password, user.password))) {
      return new Response(
        JSON.stringify({
          message: "Email or password is incorrect. Please try again.",
        }),
        {
          status: 401,
        },
      );
    }

    //If the user exists and password is correct, Generate JWT and send it with the response

    const responseBody = createSendToken(user);
    return new Response(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    console.log("Login API error", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
