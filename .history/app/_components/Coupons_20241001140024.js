"use client";
import { ChevronDownIcon, TagIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Coupons() {
  const [openDetails, setOpenDetails] = useState(false);

  function handleOpenDetails() {
    setOpenDetails((prev) => !prev);
  }
  return (
    <div className="relative">
      {/* heading */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <TagIcon className="h-5 w-5" />
          <h3 className="text-md font-semibold uppercase">coupons & offers</h3>
        </div>
        <span>
          <ChevronDownIcon
            className="h-5 w-5 cursor-pointer"
            onClick={handleOpenDetails}
          />
        </span>
      </div>
      {/* detail*/}
      {openDetails && (
        <div>
          {/* coupon input */}
          <div>
            <form>
              <input
                className="relative w-full bg-primary-50"
                type="text"
                placeholder="Type coupon code here"
              />
              <button type="submit">apply</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Coupons;
