import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export function useAuth() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // Query for fetch user data

  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("/api/user");
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
}
