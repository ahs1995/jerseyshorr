import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const createSendToken = (user) => {
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
