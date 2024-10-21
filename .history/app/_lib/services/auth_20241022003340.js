// lib/auth.js
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET;

// Utility function to verify JWT token
export async function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Get authenticated user from JWT token in cookies
export async function getAuthenticatedUser() {
  try {
    // Get the cookie from the request
    const cookieStore = cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) {
      return null;
    }

    // Verify the token
    const decoded = await verifyToken(token);
    if (!decoded) {
      return null;
    }

    console.log(decoded);

    // Find user in database
    const user = await User.findById(decoded._id);
    if (!user) {
      return null;
    }

    // Return user data (exclude sensitive fields)
    const { password, ...userData } = user.toObject();
    return userData;
  } catch (error) {
    console.error("Error getting authenticated user:", error);
    return null;
  }
}

// Example server action to get user profile
export async function getUserProfile() {
  try {
    const user = await getAuthenticatedUser();

    if (!user) {
      throw new Error("Not authenticated");
    }

    console.log("FETCHED USER:", user);

    return {
      success: true,
      user,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
