import { Button } from "@/components/ui/button";

function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <Button>Logout</Button>
    </div>
  );
}

export default UserProfile;
