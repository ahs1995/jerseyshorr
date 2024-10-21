import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

function UserProfile() {
  const { user, logout, isLogoutLoading } = useAuth();

  console.log(userData);

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
