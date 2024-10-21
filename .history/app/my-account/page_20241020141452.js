"use client";
import { useAuth } from "@/hooks/useAuth";
import UserDashboard from "../_components/client/UserDashboard";
import { useSelector } from "react-redux";
import UserProfile from "../_components/UserProfile";
import LoginForm from "../_components/client/LoginForm";
import RegisterForm from "../_components/client/RegisterForm";

function MyAccount() {
  const { isLoading } = useAuth();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto w-[90%] py-8 lg:py-12 xl:w-[80%]">
      {isAuthenticated ? (
        <UserProfile />
      ) : (
        <div>
          <div>
            <LoginForm />
          </div>
          <div>
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
