"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function SidebarController({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {children(toggleSidebar)}
      <Sidebar isOpen={isOpen} onClose={closeSidebar} />
    </>
  );
}
