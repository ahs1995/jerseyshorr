"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTransition } from "react";
import { logout } from "../_lib/actions";

const menuItems = [
  { label: "Dashboard", path: "/my-account" },
  { label: "Orders", path: "/my-account/orders" },
  { label: "Downloads", path: "/my-account/downloads" },
  { label: "Addresses", path: "/my-account/addresses" },
];

export default function Dashboard({ user, children }) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function handleLogout() {
    startTransition(() => logout());
  }

  console.log(user);

  return (
    <div className="grid grid-cols-1 gap-8 shadow-md md:grid-cols-12">
      {/* Sidebar Navigation */}
      <div className="md:col-span-3">
        <div className="mb-6 space-y-2 rounded-lg border border-primary-100 p-4">
          <p className="font-medium capitalize text-primary-800">
            Hello, {user.name}!
          </p>
          <p className="text-sm text-primary-600">{user.email}</p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block rounded-lg px-4 py-2 text-sm transition-colors ${
                pathname === item.path
                  ? "bg-primary-100 text-primary-800"
                  : "hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            disabled={isPending}
            className="text-red-600 hover:bg-red-50 w-full rounded-lg px-4 py-2 text-left text-sm transition-colors"
          >
            {isPending ? "Logging out..." : "Logout"}
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}
