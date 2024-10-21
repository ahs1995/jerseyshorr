import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

function UserProfile() {
  const { user, logout, isLogoutLoading } = useAuth();

  if (!user) return null;

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <Button onClick={logout} disabled={isLogoutLoading}>
        {isLogoutLoading ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
}

export default UserProfile;
