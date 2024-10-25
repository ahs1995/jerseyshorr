"use client";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { logout } from "../_lib/actions";

function UserProfile({ user }) {
  const [isPending, startTransition] = useTransition();

  // const router = useRouter();
  // const logoutMutation = useMutation({
  //   mutationFn: async () => {
  //     const response = await fetch("api/auth/logout", {
  //       method: "GET",
  //       credentials: "include",
  //     });
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || "Logout failed");
  //     }
  //   },
  //   onSuccess: () => {
  //     dispatch(clearUser());
  //     queryClient.invalidateQueries(["user"]);
  //     queryClient.removeQueries(["user"]);

  //     router.refresh();
  //   },
  // });

  // async function handleLogout() {
  //   try {
  //     await logoutMutation.mutateAsync();
  //   } catch (error) {
  //     console.log("Logout error:", error);
  //   }
  // }

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