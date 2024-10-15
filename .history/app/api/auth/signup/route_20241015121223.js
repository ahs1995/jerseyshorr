import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove passeword from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

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

    // Generate JWT and send it with response

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
