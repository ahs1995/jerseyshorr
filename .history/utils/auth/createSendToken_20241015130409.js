import { signToken } from "./signToken";
import { cookies } from "next/headers";

export const createSendToken = (user, action) => {
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
  if (action === "signup") {
    user.password = undefined;

    return {
      status: "success",
      token,
      data: {
        user,
      },
    };
  } else if (action === "login") {
    return {
      status: "success",
      token,
    };
  }
};
