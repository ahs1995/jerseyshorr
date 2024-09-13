"use client";
import React from "react";
import { useMenu } from "@/context/menuContext";

const Overlay = () => {
  const { showMenu, setShowMenu } = useMenu();

  if (!showMenu) return null;

  return (
    <div
      className="bg-black fixed inset-0 z-[9999] bg-opacity-50"
      onClick={() => setShowMenu(false)}
    />
  );
};

export default Overlay;
