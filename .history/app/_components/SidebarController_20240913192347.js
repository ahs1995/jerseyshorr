// SidebarToggle.js
"use client";

import { useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";

export default function SidebarController() {
  const [openSidebar, setSidebar] = useState(false);

  return (
    <>
      <Bars3Icon
        className="stroke-5 h-7 w-7 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500"
        onClick={() => setSidebar(true)}
      />
      <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500" />
      {openSidebar && (
        <div className="absolute left-0 top-10 z-[100000] h-full w-[350px] bg-[#fff] shadow-md">
          <Sidebar onSidebar={setSidebar} />
        </div>
      )}
    </>
  );
}
