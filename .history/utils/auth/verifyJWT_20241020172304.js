import jwt from "jsonwebtoken";
import { dbConnect } from "../mongodb";
import User from "@/models/User";

export async function verifyJWT(token) {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
