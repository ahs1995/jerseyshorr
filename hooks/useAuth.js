"use client";
import { clearUser, setUser } from "@/app/_lib/store/authSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export function useAuth() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();

  //Register mutation
  // const registerMutation = useMutation({
  //   mutationFn: async (userData) => {
  //     const response = await fetch("api/auth/signup", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(userData),
  //       credentials: "include",
  //     });
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || "Registeration failed");
  //     }
  //     return response.json();
  //   },
  //   onSuccess: (data) => {
  //     dispatch(setUser(data.data));
  //     queryClient.setQueryData(["user"], data);
  //     queryClient.invalidateQueries(["user"]);
  //     router.refresh();
  //   },

  //   onError: (error) => {
  //     dispatch(clearUser());
  //     console.error("Registration error:", error);
  //   },
  // });

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
      router.refresh();
    },
  });

  return {
    register: registerMutation.mutateAsync,
    isRegisterLoading: registerMutation.isLoading,
    registerError: registerMutation.error,
    logout: logoutMutation.mutate,
    isLogoutLoading: logoutMutation.isLoading,
    logoutError: logoutMutation.error,
  };
}
