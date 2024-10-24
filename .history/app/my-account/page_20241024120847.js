import { Suspense } from "react";
import UserProfile from "../_components/UserProfile";
import LoginForm from "../_components/client/LoginForm";
import RegisterForm from "../_components/client/RegisterForm";
import { getUserProfile } from "../_lib/services/auth";
import AccountLayout from "../_components/layouts/AccountLayout";
import Dashboard from "../_components/Dashboard";

async function MyAccount() {
  const { success, user, error } = await getUserProfile();

  const plainUser = user ? JSON.parse(JSON.stringify(user)) : null;

  return (
    <AccountLayout>
      {plainUser ? (
        <Suspense fallback={<div>Loading profile...</div>}>
          <Dashboard user={plainUser}>
            <div className="space-y-6">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              {/* Dashboard overview content */}
              <div>
                <h2>account details</h2>
              </div>
            </div>
          </Dashboard>
        </Suspense>
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
    </AccountLayout>
  );
}

export default MyAccount;
