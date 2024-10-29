"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const MenuContext = createContext();

function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategorySide, setShowCategorySide] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
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
    throw new Error("menuContext was used outside menuProvider");
  return context;
}

export { MenuProvider, useMenu };
