import { Button } from "@/components/ui/button";

function UserProfile({ user }) {

    async function handleLogout() {
        try {
            const response = await fetch('api/auth/logout', {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json"
                }
            })
        }
    }

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <Button onClick={()=> fetch()}>Logout</Button>
    </div>
  );
}

export default UserProfile;
