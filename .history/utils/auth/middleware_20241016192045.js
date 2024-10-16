import jwt from "jsonwebtoken";
import { promisify } from "util";
import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";

export const protectRoute = async (req) => {
  try {
    await dbConnect();

    // 1. Get the token from headers or cookies
    let token;
    if (
      req.headers.get("authorization") &&
      req.headers.get("authorization").startsWith("Bearer")
    ) {
      token = req.headers.get("authorization").split(" ")[1];
    } else if (req.cookies && req.cookies.get("jwt")) {
      token = req.cookies.get("jwt").value;
    }

    if (!token) {
      throw new Error("You are not logged in. Please login to get access.");
    }

    // 2. Verify the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3. Check if the user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      throw new Error("The user belonging to this token no longer exists.");
    }

    // 4. Check if the user changed the password after the token was issued
    if (await currentUser.changedPasswordAfter(decoded.iat)) {
      throw new Error("User recently changed password! Please log in again.");
    }

    // Attach the user object to the request for further use
    return currentUser;
  } catch (error) {
    console.error("Protect route error: ", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 401,
    });
  }
};
