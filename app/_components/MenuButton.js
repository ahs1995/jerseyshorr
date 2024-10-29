"use client";

import { useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useMenu } from "@/context/menuContext";

const MenuButton = () => {
  const { showMenu, setShowMenu, showCategorySide } = useMenu();

  // Disable scrolling when the sidebar is open
  useEffect(() => {
    if (showMenu || showCategorySide) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu, showCategorySide]);

  return (
    <>
      {/* Hamburger Icon */}
      <Bars3Icon
        className="stroke-5 h-7 w-7 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500 md:hidden"
        onClick={() => setShowMenu(true)}
      />
    </>
  );
};

export default MenuButton;
