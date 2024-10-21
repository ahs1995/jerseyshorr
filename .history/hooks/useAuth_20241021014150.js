import { clearUser, setUser } from "@/app/_lib/store/authSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export function useAuth() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // Helper function to check if the JWT cookie exists
  const hasJWT = () => {
    if (typeof document !== "undefined") {
      const jwtCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="));
      console.log("JWT cookie:", jwtCookie);
      return jwtCookie;
    }
    return null;
  };

  // Query for fetch user datas
  const {
    data: userData,
    isLoading,
    isError,
    error,
    status,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/auth/getUser");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch user data");
        }
        return response.json();
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
      }
    },
    enabled: !!hasJWT(),
    // staleTime: 5 * 60 * 1000,
    // cacheTime: 30 * 60 * 1000,
    // retry: 1,

    onSuccess: (data) => {
      if (data) {
        dispatch(setUser(data));
      }
    },
    onError: () => {
      dispatch(clearUser());
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
