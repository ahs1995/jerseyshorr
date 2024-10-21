import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const createSendToken = (user, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };

  // Set cookie using Next.js built-in API
  res.headers.append("Set-Cookie", cookie.serialize("jwt", cookieOptions));

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
