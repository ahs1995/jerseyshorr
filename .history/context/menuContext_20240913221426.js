"use client";

import { createContext, useContext, useState } from "react";

export const MenuContext = createContext();

function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuProvider };
