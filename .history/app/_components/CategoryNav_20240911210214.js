"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function CategoryNav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    const nav = document.querySelector("#category-nav");

    const handleScroll = () => {
      if (window.scrollY > header.offsetHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="category-nav"
      className={`bg-primary-900 text-primary-50 transition-all duration-300 ${
        isSticky ? "fixed left-0 right-0 top-0 z-10 shadow-md" : ""
      } hidden md:block`}
    >
      {/* Add your category navigation items here */}
      <div className="container mx-auto px-4 py-2">
        <ul className="flex justify-center space-x-10">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>Shop</li>
          <li>
            <Link href="#">Track your order</Link>
          </li>
          <li>FAQ</li>

          {/* Add more categories as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default CategoryNav;
