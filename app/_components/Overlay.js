"use client";
import React from "react";
import { useMenu } from "@/context/menuContext";

const Overlay = () => {
  const { showMenu, setShowMenu, showCategorySide, setShowCategorySide } =
    useMenu();

  if (!showMenu && !showCategorySide) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-primary-950 bg-opacity-70"
      onClick={() => {
        setShowMenu(false);
        setShowCategorySide(false);
      }}
    />
  );
};

export default Overlay;
