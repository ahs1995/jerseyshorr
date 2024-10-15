import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";
import { cookies } from "next/headers";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  // Set cookie using Next.js built-in API
  cookies().set({
    name: "jwt",
    value: token,
    ...cookieOptions,
  });

  // Remove password from output
  user.password = undefined;

  return {
    status: "success",
    token,
    data: {
      user,
    },
  };
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

    const responseBody = createSendToken(newUser);

    return new Response(JSON.stringify(responseBody), { status: 201 });
  } catch (error) {
    console.log("Signup API error", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}
