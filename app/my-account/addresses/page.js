import { getUserProfile } from "@/app/_lib/services/auth";
import Dashboard from "@/app/_components/Dashboard";
import AccountLayout from "@/app/_components/layouts/AccountLayout";
import AddressesContent from "@/app/_components/client/AddressesContent";

export default async function AddressesPage() {
  const { user } = await getUserProfile();
  const plainUser = user ? JSON.parse(JSON.stringify(user)) : null;

  if (!plainUser) {
    redirect("/my-account");
  }

  return (
    <AccountLayout>
      <Dashboard user={plainUser}>
        <div className="space-y-6">
          <div className="bg-accent-400 py-2 pl-2">
            <h1 className="text-xl font-bold uppercase text-accent-50 xl:text-2xl">
              Your Orders
            </h1>
          </div>
          {/* Orders content */}
          <AddressesContent user={plainUser} />
        </div>
      </Dashboard>
    </AccountLayout>
  );
}
