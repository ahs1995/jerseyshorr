import React from "react";
import { useMenu } from "@/context/menuContext";

const Overlay = () => {
  const { showMenu, setShowMenu } = useMenu();

  if (!showMenu) return null;

  return (
    <div
      className="bg-black fixed inset-0 z-[99999] bg-opacity-50"
      onClick={() => setShowMenu(false)}
    />
  );
};

export default Overlay;
