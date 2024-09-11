"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function CategoryNav() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState(false);

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
            onMouseEnter={() => setActiveCategory(true)}
            onMouseLeave={() => setActiveCategory(false)}
          >
            shop
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
        {activeCategory && (
          <div className="w-full bg-accent-500">
            <div>
              <ul>
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
      </div>
    </nav>
  );
}

export default CategoryNav;
