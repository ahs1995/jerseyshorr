"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

function UserProfile() {
  const { userData, logout, isLogoutLoading } = useAuth();

  return (
    <div>
      <h2>{userData.name}</h2>
      <h2>{userData.email}</h2>
      <Button onClick={logout} disabled={isLogoutLoading}>
        {isLogoutLoading ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
}

export default UserProfile;