"use client";
import { ChevronDownIcon, TagIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import clsx from "clsx";

function Coupons() {
  const [openDetails, setOpenDetails] = useState(false);

  function handleOpenDetails() {
    setOpenDetails((prev) => !prev);
  }
  return (
    <div className="relative lg:max-w-[400px]">
      {/* heading */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <TagIcon className="h-5 w-5" />
          <h3 className="text-md font-semibold uppercase">coupons & offers</h3>
        </div>
        <span className="lg:hidden">
          <ChevronDownIcon
            className={clsx(
              "h-5 w-5 cursor-pointer transition-transform duration-300",
              {
                "rotate-180": openDetails,
              },
            )}
            onClick={handleOpenDetails}
          />
        </span>
      </div>
      {/* detail container*/}
      <div
        className={clsx(
          "transition-max-height overflow-hidden duration-500 ease-in-out md:w-[300px]",
          openDetails ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          "opacity-100 lg:max-h-96",
        )}
      >
        {/* coupon input */}
        <div className="mb-10 mt-6">
          <form className="relative">
            <input
              className="relative w-full bg-white-50 px-3 py-4 outline-none"
              type="text"
              placeholder="Type coupon code here"
            />
            <button
              className="absolute right-3 top-5 text-xs font-semibold uppercase text-accent-500"
              type="submit"
            >
              apply
            </button>
          </form>
        </div>
        {/* offers */}
        <div className="text-xs">
          <h5 className="mb-2 font-semibold uppercase">
            Additional offers on your cart
          </h5>
          <ul className="list-disc px-4 text-primary-700">
            <li>Buy any two jerseys at 20% off</li>
            <li>
              Get up to 10% cashback on orders above Rs.2000 via Mobiwik UPI.
              TCA
            </li>
            <li>
              Get 10% instant discount on ICICI Bank Credit card on roders above
              Rs. 3500. TCA
            </li>
            <li>
              Flat Rs.30 cashback on PhonePe UPI on a minimum spend of Rs.1500.
              TCA
            </li>
            <li>
              Get upto Rs.500 cashback on CRED UPI on orders above Rs. 2000. TCA
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
