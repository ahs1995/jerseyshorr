"use client";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { logout } from "../_lib/actions";

function UserProfile({ user }) {
  const [isPending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(() => logout());
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <Button onClick={handleLogout} disabled={isPending}>
        {isPending ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
}

export default UserProfile;
