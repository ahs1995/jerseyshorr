"use client";
import { useAuth } from "@/hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../_components/UserProfile";
import LoginForm from "../_components/client/LoginForm";
import RegisterForm from "../_components/client/RegisterForm";
import { useEffect } from "react";
import { setUser } from "../_lib/store/authSlice";

function MyAccount() {
  const dispatch = useDispatch();
  const { userData, isLoading, isError, error } = useAuth(); // Use isError and error
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user && !isLoading && userData) {
      dispatch(setUser(userData)); // Set user if available
    }
  }, [user, userData, isLoading, dispatch]);

  // Stop infinite loading when there's a 401 Unauthorized
  if (isError && error.message === "Unauthorized") {
    return (
      <div className="mx-auto w-[90%] py-8 lg:py-12 xl:w-[80%]">
        <div className="flex flex-col gap-16 md:flex-row md:gap-4 lg:gap-[6rem] xl:gap-[10rem]">
          <div className="flex-1">
            <LoginForm />
          </div>
          <span className="hidden border-l-[1px] border-primary-50 xl:block"></span>
          <div className="flex-1">
            <RegisterForm />
          </div>
        </div>
      </div>
    );
  }

  // Loading state while user is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render user profile if authenticated
  return (
    <div className="mx-auto w-[90%] py-8 lg:py-12 xl:w-[80%]">
      {user ? (
        <UserProfile />
      ) : (
        <div>Loading user data...</div> // Fallback UI
      )}
    </div>
  );
}

export default MyAccount;
