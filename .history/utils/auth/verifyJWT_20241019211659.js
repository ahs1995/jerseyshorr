import jwt from "jsonwebtoken";
import { dbConnect } from "../mongodb";
import User from "@/models/User";

export async function verifyJWT(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.id;

    await dbConnect();

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Authentication failed");
  }
}
