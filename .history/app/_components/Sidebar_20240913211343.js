import {
  ChevronRightIcon,
  UserCircleIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function Sidebar({ toggleSidebar, onOpen }) {
  return (
    <aside
      className={
        "absolute left-0 top-10 z-[100000] h-full w-[350px] bg-[#fff] shadow-md transition-transform duration-500"
      }
    >
      <div className="relative py-6 text-primary-900">
        {/* exit icon */}
        <div className="absolute right-3">
          <XMarkIcon
            className="h-6 w-6 cursor-pointer text-primary-800"
            onClick={toggleSidebar}
          />
        </div>
        {/* category list */}
        <ul className="my-10 flex flex-col gap-4 font-bold uppercase text-primary-800">
          <li className="px-4">
            <Link href="#">home</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li className="px-4">
            <span className="flex cursor-pointer items-center justify-between">
              shop
              <ChevronRightIcon className="h-5 w-5" />
            </span>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li className="px-4">
            <Link href="#">track your order</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li className="px-4">
            <Link href="#">faq</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li className="px-4">
            <Link href="#">about us</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
        </ul>
        {/* auth menu */}
        <div>
          <ul className="flex flex-col gap-4 text-sm text-primary-700">
            <li className="px-4">
              <Link href="#">
                <span className="flex items-center gap-2">
                  <UserCircleIcon className="h-7 w-7" />
                  Sign in
                </span>
              </Link>
            </li>
            <li className="px-4">
              <Link href="#">
                <span className="flex items-center gap-2">
                  <UserPlusIcon className="h-7 w-7" />
                  Create an Account
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {/* CTA */}
        <div className="mt-[19rem] flex flex-col items-center gap-4">
          <button className="block w-[80%] rounded-md bg-accent-500 py-2 text-lg capitalize text-accent-50 shadow-md hover:bg-accent-600">
            shop now
          </button>
          <span className="text-xs capitalize text-primary-500">
            contact
            <Link href="#" className="underline">
              {" "}
              us
            </Link>
          </span>
          {/* social media links */}
          <div className="mt-2 flex">
            <span className="cursor-pointer border-[1px] border-r-0 border-primary-100 px-4 py-1 outline-none">
              <Image
                src="/icons/fb-icon.png"
                alt="facebook icon"
                width={12}
                height={12}
              />
            </span>
            <span className="cursor-pointer border-[1px] border-primary-100 px-4 py-1 outline-none">
              <Image
                src="/icons/x-icon.png"
                alt="x icon"
                width={12}
                height={12}
              />
            </span>
            <span className="cursor-pointer border-[1px] border-l-0 border-primary-100 px-4 py-1 outline-none">
              <Image
                src="/icons/insta-icon.png"
                alt="insta icon"
                width={12}
                height={12}
              />
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
