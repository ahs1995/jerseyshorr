"use client";
import { useMenu } from "@/context/menuContext";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import CTASidebar from "./CTASidebar";

function CategorySidebar() {
  const { showCategorySide, setShowCategorySide, setShowMenu, isMobile } =
    useMenu();

  if (!isMobile) {
    setShowCategorySide(false);
  }

  return (
    <aside
      className={`absolute left-0 top-0 z-[100000] h-full w-[80vw] bg-[#fff] shadow-md duration-300 ease-in-out ${
        showCategorySide ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="relative text-primary-900">
        {/* back to sidebar button */}
        <div className="flex items-center bg-primary-50 p-4">
          <ArrowLeftIcon
            className="h-6 w-6 cursor-pointer text-primary-800 hover:text-primary-600"
            onClick={() => {
              setShowCategorySide(false);
              setShowMenu(true);
            }}
          />
          <span className="mx-auto text-sm font-bold uppercase">
            shop by categories
          </span>
        </div>
        {/* content */}
        <div className="flex flex-col justify-center py-8">
          <ul className="flex flex-col gap-4 text-sm font-normal capitalize text-primary-800">
            <li className="px-4">
              <Link href="#">category1</Link>
            </li>
            <hr className="w-full border-primary-100 outline-none" />
            <li className="px-4">
              <Link href="#">category2</Link>
            </li>
            <hr className="w-full border-primary-100 outline-none" />
            <li className="px-4">
              <Link href="#">category3</Link>
            </li>
            <hr className="w-full border-primary-100 outline-none" />
            <li className="px-4">
              <Link href="#">category4</Link>
            </li>
            <hr className="w-full border-primary-100 outline-none" />
            <li className="px-4">
              <Link href="#">category5</Link>
            </li>
            <hr className="w-full border-primary-100 outline-none" />
            <li className="px-4">
              <Link href="#">category6</Link>
            </li>
            <hr className="w-full border-primary-100 outline-none" />
            <li className="px-4">
              <Link href="#">category7</Link>
            </li>
            <hr className="w-full border-primary-100 outline-none" />
            <li className="px-4">
              <Link href="#">category8</Link>
            </li>
            <hr className="w-full border-primary-100 outline-none" />
          </ul>
          {/* CTA */}
          <CTASidebar />
        </div>
      </div>
    </aside>
  );
}

export default CategorySidebar;
