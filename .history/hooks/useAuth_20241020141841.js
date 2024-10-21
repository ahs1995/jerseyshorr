import { clearUser } from "@/app/_lib/store/authSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export function useAuth() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // Query for fetch user data

  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("/api/auth/user");
      if (!response.ok) throw new Error("Not authenticated");
      return response.json();
    },
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
    onError: () => {
      dispatch(clearUser());
    },
    retry: false,
  });

  //Register mutation
  const registerMutation = useMutation({
    mutationFn: async (userData) => {
      const response = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      if (!response.ok) throw new Error("Registeration failed");
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  // Logout mutation

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("api/auth/logout", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) throw new Error("Logout failed");
    },
    onSuccess: () => {
      dispatch(clearUser());
      queryClient.removeQueries(["user"]);
    },
  });

  return {
    userData,
    isLoading,
    regiser: registerMutation.mutate,
    isRegisterLoading: registerMutation.isLoading,
    registerError: registerMutation.error,
    logout: logoutMutation.mutate,
    isLogoutLoading: logoutMutation.isLoading,
    logoutError: logoutMutation.error,
  };
}
