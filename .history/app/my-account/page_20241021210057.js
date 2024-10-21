"use client";
import UserProfile from "../_components/UserProfile";
import LoginForm from "../_components/client/LoginForm";
import RegisterForm from "../_components/client/RegisterForm";

function MyAccount() {
  return (
    <div className="mx-auto w-[90%] py-8 lg:py-12 xl:w-[80%]">
      {user ? (
        <UserProfile />
      ) : (
        <div className="flex flex-col gap-16 md:flex-row md:gap-4 lg:gap-[6rem] xl:gap-[10rem]">
          <div className="flex-1">
            <LoginForm />
          </div>
          <span className="hidden border-l-[1px] border-primary-50 xl:block"></span>
          <div className="flex-1">
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAccount;
