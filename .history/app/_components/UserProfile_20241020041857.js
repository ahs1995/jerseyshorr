"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function UserProfile({ user }) {
  const router = useRouter();

  async function handleLogout() {
    try {
      const response = await fetch("api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.refresh();
        router.push("/");
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
