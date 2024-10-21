export async function fetchUserData({ token }) {
  try {
    const response = await fetch("/api/auth/user", {
      headers: {
        Authorization: `Bearer ${token})}`,
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
