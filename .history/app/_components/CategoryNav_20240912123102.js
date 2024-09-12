"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

function CategoryNav() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);
  const categoryRef = useRef(null);
  const timeoutRef = useRef(null);

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

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setActiveCategory(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (categoryRef.current && !categoryRef.current.matches(":hover")) {
        setActiveCategory(false);
      }
    }, 100);
  };

  return (
    <nav
      id="category-nav"
      className={`bg-primary-900 text-primary-50 transition-all duration-300 ${
        isSticky ? "fixed left-0 right-0 top-0 z-10 shadow-md" : ""
      } hidden md:block`}
    >
      {/* Add your category navigation items here */}
      <div className="container mx-auto px-4 py-2 text-sm">
        <ul className="flex justify-center space-x-14 uppercase">
          <li>
            <Link
              className="cursor-pointer transition-colors duration-300 hover:text-accent-300"
              href="#"
            >
              home
            </Link>
          </li>
          <li
            className="cursor-pointer transition-colors duration-300 hover:text-accent-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex flex-row items-center gap-1">
              shop
              <ChevronDownIcon className="h-3 w-3 text-primary-50 hover:text-accent-300" />
            </span>
          </li>
          <li>
            <Link
              className="cursor-pointer transition-colors duration-300 hover:text-accent-300"
              href="#"
            >
              track your order
            </Link>
          </li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-accent-300">
            FAQ
          </li>

          {/* Add more categories as needed */}
        </ul>
      </div>
      {activeCategory && (
        <div
          ref={categoryRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute left-1 right-1 bg-[#fff] text-primary-900 shadow-md"
        >
          <div className="p-8 text-center">
            <ul className="grid grid-cols-4 gap-8 text-sm">
              <li>
                <Link href="#">category 1</Link>
              </li>
              <li>
                <Link href="#">category 2</Link>
              </li>
              <li>
                <Link href="#">category 3</Link>
              </li>
              <li>
                <Link href="#">category 4</Link>
              </li>
              <li>
                <Link href="#">category 5</Link>
              </li>
              <li>
                <Link href="#">category 6</Link>
              </li>
              <li>
                <Link href="#">category 7</Link>
              </li>
              <li>
                <Link href="#">category 8</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default CategoryNav;
