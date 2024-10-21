import { verifyJWT } from "@/utils/auth/verifyJWT";
import AuthForms from "../AuthForms";
import UserProfile from "../UserProfile";
import { cookies } from "next/headers";

async function UserDashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt");

  if (!token) {
    return <AuthForms />;
  }

  const user = await verifyJWT(token.value);

  if (!user) {
    <AuthForms />;
  }

  return (
    <div>
      {/* Heading */}
      <div className="mb-6 bg-primary-50 py-2 xl:mb-10">
        <h2 className="text-center text-lg font-bold uppercase text-primary-800 xl:text-2xl">
          My account
        </h2>
      </div>
      <UserProfile user={user} />
    </div>
  );
}

export default UserDashboard;
