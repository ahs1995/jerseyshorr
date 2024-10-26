import { getUserProfile } from "@/app/_lib/services/auth";
import Dashboard from "@/app/_components/Dashboard";
import AccountLayout from "@/app/_components/layouts/PageLayout";
import DownloadsContent from "@/app/_components/client/DownloadsContent";
import { redirect } from "next/navigation";

export default async function DownloadsPage() {
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
              downloads
            </h1>
          </div>
          {/* Orders content */}
          <DownloadsContent user={plainUser} />
        </div>
      </Dashboard>
    </AccountLayout>
  );
}
