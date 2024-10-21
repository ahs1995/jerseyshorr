import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

function UserProfile() {
  const { userData, logout, isLogoutLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If userData is available, we stop the loading state
    if (userData) {
      setIsLoading(false);
    }
  }, [userData]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  // If userData is still undefined or invalid, return an error message
  if (!userData || !userData.data || !userData.data.user) {
    return <div>Error: Unable to fetch user data</div>;
  }

  const { name, email } = userData.data.user;

  return (
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <Button onClick={logout} disabled={isLogoutLoading}>
        {isLogoutLoading ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
}

export default UserProfile;
