"use client";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

function UserProfile({ user }) {
  console.log(user);
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <Button>logout</Button>
    </div>
  );
}

export default UserProfile;
