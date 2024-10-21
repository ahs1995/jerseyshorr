export async function fetchUserData() {
  try {
    const response = await fetch("/api/auth/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
