import { Button } from "@/components/ui/button";

function UserProfile({ user }) {
  async function handleLogout() {
    try {
      const response = await fetch("api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("logout successful");
      } else {
        console.log("Failing to logout");
      }
    } catch (error) {
      console.log("Logout error", error);
    }
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default UserProfile;
