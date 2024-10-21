"use client";
import { useAuth } from "@/hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../_components/UserProfile";
import LoginForm from "../_components/client/LoginForm";
import RegisterForm from "../_components/client/RegisterForm";
import { useEffect } from "react";
import { setUser } from "../_lib/store/authSlice";
import { parseCookies } from "nookies";
import { fetchUserData } from "@/utils/auth/fetchUserData";

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  const token = cookies.jwt;

  if (!token) {
    return {
      redirect: {
        destination: "/my-account",
        permanent: false,
      },
    };
  }

  try {
    const user = await fetchUserData(token);
    return {
      props: { user },
    };
  } catch (error) {
    return {
      redirect: "/my-account",
      permanent: false,
    };
  }
}

function MyAccount({ user }) {
  // const dispatch = useDispatch();
  // const { userData, isLoading } = useAuth();
  // // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);

  // useEffect(() => {
  //   if (!user && !isLoading) {
  //     if (userData) {
  //       dispatch(setUser(userData));
  //     }
  //   }
  // }, [user, userData, isLoading, dispatch]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

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
