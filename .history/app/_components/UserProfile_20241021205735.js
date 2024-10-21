import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

function UserProfile() {
  return (
    <div>
      {/* <h2>{userData.data.user.name}</h2>
      <h2>{userData.data.user.email}</h2> */}
      <Button onClick={logout} disabled={isLogoutLoading}>
        {isLogoutLoading ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
}

export default UserProfile;
