export async function fetchUserData(token) {
  try {
    const response = await fetch("/api/auth/getUser", {
      headers: {
        method: "GET",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    return await response.json();
  } catch (error) {
    console.log("Fetch user data error:", error);
    throw error;
  }
}
