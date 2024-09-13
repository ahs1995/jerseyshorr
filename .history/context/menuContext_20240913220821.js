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

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { MenuProvider, useMenu };
