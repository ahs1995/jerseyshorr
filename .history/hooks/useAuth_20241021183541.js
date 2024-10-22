import { clearUser, setUser } from "@/app/_lib/store/authSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export function useAuth() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // Query for fetching user data
  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("/api/auth/getUser", {
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch user data");
      }

      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    retry: false, // Disable retry on error
    onSuccess: (data) => {
      if (data) {
        dispatch(setUser(data)); // Set user in Redux
      }
    },
    onError: (err) => {
      if (err.message === "Unauthorized") {
        dispatch(clearUser()); // Clear user if there's a 401 error
      }
    },
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
        const errorData = await response.json();
        throw new Error(errorData.message || "Registeration failed");
      }
      return response.json();
    },
    onSuccess: (data) => {
      if (data) {
        dispatch(setUser(data.data));
        queryClient.setQueryData(["user"], data);
        queryClient.invalidateQueries(["user"]);
      }
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
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Logout failed");
      }
    },
    onSuccess: () => {
      dispatch(clearUser());
      queryClient.removeQueries(["user"]);
    },
  });

  return {
    userData,
    isLoading,
    register: registerMutation.mutateAsync,
    isRegisterLoading: registerMutation.isLoading,
    registerError: registerMutation.error,
    logout: logoutMutation.mutate,
    isLogoutLoading: logoutMutation.isLoading,
    logoutError: logoutMutation.error,
  };
}