import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";

export async function POST(req) {
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

    return new Response(
      JSON.stringify({
        message: "User registered successfully!",
        user: newUser,
      }),
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log("Signup API error", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}