"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";

const MenuButton = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <Bars3Icon
        className="stroke-5 h-7 w-7 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500"
        onClick={toggleSidebar}
      />
      {/* Sidebar */}
      {sidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}
    </>
  );
};

export default MenuButton;
