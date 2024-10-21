import jwt from "jsonwebtoken";

export async function verifyJWT(token) {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
