import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="relative py-6 text-primary-900">
      <div className="absolute right-1">
        <XMarkIcon className="h-6 w-6" />
      </div>
      <ul className="mt-10 flex flex-col gap-4 font-bold uppercase">
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

        <li>category 6</li>
        <li>category 7</li>
        <li>category 8</li>
        <li>category 9</li>
        <li>category 10</li>
      </ul>
    </div>
  );
}

export default Sidebar;
