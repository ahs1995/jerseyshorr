"use client";
import { useMenu } from "@/context/menuContext";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function CategorySidebar() {
  const { showCategorySide, setShowCategorySide, setShowMenu } = useMenu();
  return (
    <aside
      className={`absolute left-0 top-0 z-[100000] h-full w-[80vw] bg-[#fff] shadow-md duration-300 ease-in-out ${
        showCategorySide ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="relative py-6 text-primary-900">
        {/* back to sidebar button */}
        <div>
          <ArrowLeftIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => {
              setShowCategorySide(false);
              setShowMenu(true);
            }}
          />
        </div>
        <ul className="my-10 flex flex-col gap-4 font-bold uppercase text-primary-800">
          <li className="px-4">
            <Link href="#">category1</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category2</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category3</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category4</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category5</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category6</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category7</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
          <li>
            <Link href="#">category8</Link>
          </li>
          <hr className="w-full border-primary-100 outline-none" />
        </ul>
      </div>
    </aside>
  );
}

export default CategorySidebar;
