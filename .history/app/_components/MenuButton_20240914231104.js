"use client";

import { useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useMenu } from "@/context/menuContext";

const MenuButton = () => {
  //   const [sidebarOpen, setSidebarOpen] = useState(false);
  //   const [showSidebar, setShowSidebar] = useState(false);

  const { showMenu, setShowMenu, isMobile } = useMenu();

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  // Disable scrolling when the sidebar is open
  useEffect(() => {
    if (showMenu && isMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu, isMobile]);

  return (
    <>
      {/* Hamburger Icon */}
      <Bars3Icon
        className="stroke-5 h-7 w-7 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500"
        onClick={() => setShowMenu(true)}
      />
    </>
  );
};

export default MenuButton;
