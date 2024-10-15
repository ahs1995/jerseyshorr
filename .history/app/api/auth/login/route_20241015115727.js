import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

//   const createSendToken = (user, statusCode, res) => {
//     const token = signToken(user._id);

//     const cookieOptions = {
//       expires: new Date(
//         Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//       ),
//       httpOnly: true,
//     };
//     if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

//     res.cookie('jwt', token, cookieOptions);

//     // Remove passeword from output
//     user.password = undefined;

//     res.status(statusCode).json({
//       status: 'success',
//       token,
//       data: {
//         user,
//       },
//     });
//   };

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
        JSON.stringify({ messsage: "Incorrect email or password" }),
        {
          status: 401,
        },
      );
    }

    // If the user exists and password is correct, Generate JWT and send it with the response

    const token = signToken(user._id);

    return new Response(
      JSON.stringify({
        message: "User logged in successfully",
        token,
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log("Login API error", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
