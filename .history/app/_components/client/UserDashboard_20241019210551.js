import { verifyJWT } from "@/utils/auth/verifyJWT";
import AuthForms from "../AuthForms";
import UserProfile from "../UserProfile";
import { cookies } from "next/headers";

async function UserDashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt");

  if (!token) {
    console.error("user is not authenticated");
  }

  const user = await verifyJWT(token.value);

  if (!user) {
    console.log("Invalid token or token has expired");
  }

  return (
    <div>
      {/* Heading */}
      <div className="mb-6 bg-primary-50 py-2 xl:mb-10">
        <h2 className="text-center text-lg font-bold uppercase text-primary-800 xl:text-2xl">
          My account
        </h2>
      </div>
      {user ? <UserProfile /> : <AuthForms />}
    </div>
  );
}

export default UserDashboard;
