import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";
import { createSendToken } from "@/utils/auth/createSendToken";

export async function POST(req, res) {
  try {
    await dbConnect();
    const body = await req.json();

    const { name, email, password, passwordConfirm } = body;

    if (!name || !email || !password || !passwordConfirm) {
      return new Response(
        JSON.stringify({ messsage: "All fields are required" }),
        {
          status: 400,
        },
      );
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });

    // Generate JWT and send it with response

    const responseBody = createSendToken(newUser);

    return new Response(JSON.stringify(responseBody), { status: 201 });
  } catch (error) {
    console.log("Signup API error", error);
    if (error.code === 11000 && error.keyPattern.email) {
      return new Response(
        JSON.stringify({
          status: "fail",
          message: "Email is already registered. Please try login.",
        }),
        { status: 400 },
      );
    }
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}
