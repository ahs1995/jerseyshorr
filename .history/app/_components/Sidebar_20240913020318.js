import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="relative py-8 text-primary-900">
      {/* exit icon */}
      <div className="absolute right-3">
        <XMarkIcon className="h-6 w-6 text-primary-800" />
      </div>
      {/* category list */}
      <ul className="my-10 flex flex-col gap-4 font-bold uppercase text-primary-800">
        <li className="px-4">
          <Link href="#">home</Link>
        </li>
        <hr className="w-full border-primary-100 outline-none" />
        <li className="px-4">
          <span className="flex items-center justify-between">
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
      <div className="mt-[20rem] flex flex-col items-center gap-4">
        <button className="block w-[80%] rounded-md bg-accent-500 py-2 text-lg capitalize text-accent-50">
          shop
        </button>
        <span className="text-xs capitalize text-primary-500">
          <Link href="#">contact</Link> us
        </span>
        {/* social media links */}
        <div className="flex">
          <span className="border-2 border-r-0 border-primary-100 px-4 py-1 outline-none">
            <Image
              src="/icons/fb-icon.png"
              alt="facebook icon"
              width={15}
              height={15}
            />
          </span>
          <span className="border-2 border-primary-100 px-4 py-1 outline-none">
            <Image
              src="/icons/x-icon.png"
              alt="x icon"
              width={15}
              height={15}
            />
          </span>
          <span className="border-2 border-l-0 border-primary-100 px-4 py-1 outline-none">
            <Image
              src="/icons/insta-icon.png"
              alt="insta icon"
              width={15}
              height={15}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;