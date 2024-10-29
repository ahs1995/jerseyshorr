"use client";
import { useMenu } from "@/context/menuContext";
import {
  ChevronRightIcon,
  UserCircleIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import CTASidebar from "./CTASidebar";

function Sidebar() {
  const { showMenu, setShowMenu, showCategorySide, setShowCategorySide } =
    useMenu();

  if (showCategorySide) {
    setShowMenu(false);
  }
  return (
    <aside
      className={`absolute left-0 top-0 z-[100000] h-full w-[80vw] bg-[#fff] shadow-md duration-300 ease-in-out md:hidden ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="relative py-6 text-primary-900">
        {/* exit icon */}
        <div className="absolute right-3">
          <XMarkIcon
            className="h-6 w-6 cursor-pointer text-primary-800 hover:text-accent-500"
            onClick={() => setShowMenu(false)}
          />
        </div>
        {/* category list */}
        <ul className="my-10 flex flex-col gap-4 font-bold uppercase text-primary-800">
          <li className="px-4">
            <Link href="#" className="hover:text-primary-600">
              home
            </Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li className="px-4">
            <span
              className="flex cursor-pointer items-center justify-between hover:text-primary-600"
              onClick={() => setShowCategorySide(true)}
            >
              shop
              <ChevronRightIcon className="h-5 w-5" />
            </span>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li className="px-4">
            <Link href="#" className="hover:text-primary-600">
              track your order{" "}
            </Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li className="px-4">
            <Link href="#" className="hover:text-primary-600">
              faq
            </Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li className="px-4">
            <Link href="#" className="hover:text-primary-600">
              about us
            </Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
        </ul>
        {/* auth menu */}
        <div>
          <ul className="flex flex-col gap-4 text-base text-primary-800">
            <li className="px-4">
              <Link href="#" className="hover:text-primary-600">
                <span className="flex items-center gap-1">
                  <UserCircleIcon className="h-6 w-6" />
                  Sign in
                </span>
              </Link>
            </li>
            <li className="px-4">
              <Link href="#" className="hover:text-primary-600">
                <span className="flex items-center gap-1">
                  <UserPlusIcon className="h-6 w-6" />
                  Create an Account
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {/* CTA */}
        <CTASidebar />
      </div>
    </aside>
  );
}

export default Sidebar;
