"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const MenuContext = createContext();

function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showCategorySide, setShowCategorySide] = useState(false);

  useEffect(() => {
    function checkScreenSize() {
      setIsMobile(window.innerWidth < 768);
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
        isMobile,
        setIsMobile,
        showCategorySide,
        setShowCategorySide,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { MenuProvider, useMenu };
