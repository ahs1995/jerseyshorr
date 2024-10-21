import { clearUser, setUser } from "@/app/_lib/store/authSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export function useAuth() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // Helper function to check if the JWT cookie exists
  const hasJWT = () => {
    if (typeof document !== "undefined") {
      return document.cookie.split("; ").find((row) => row.startsWith("jwt="));
    }
    return null;
  };

  // Extract user data from response
  const extractUserData = (response) => {
    if (response?.data?.user) {
      return response.data.user;
    }
    if (response?.user) {
      return response.user;
    }
    return response;
  };

  // Query for fetch user datas
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("/api/auth/getUser");
      if (!response.ok) throw new Error("Not authenticated");
      const data = response.json();
      return extractUserData(data);
    },
    enabled: !!hasJWT(),

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
      const response = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registeration failed");
      }
      const data = response.json();
      return extractUserData(data);
    },
    onSuccess: (data) => {
      dispatch(setUser(data));
      queryClient.setQueryData(["user"], data);
      queryClient.invalidateQueries(["user"]);
    },

    onError: (error) => {
      dispatch(clearUser());
      console.error("Registration error:", error);
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
    user: userData,
    isLoading,
    register: registerMutation.mutateAsync,
    isRegisterLoading: registerMutation.isLoading,
    registerError: registerMutation.error,
    logout: logoutMutation.mutate,
    isLogoutLoading: logoutMutation.isLoading,
    logoutError: logoutMutation.error,
  };
}
