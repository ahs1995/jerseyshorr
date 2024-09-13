"use client";

import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";

const MenuButton = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Disable scrolling when the sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.style.filter = "blur(5px) brightness(0.2)";
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.filter = "none";
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.filter = "none";
    };
  }, [sidebarOpen]);

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
