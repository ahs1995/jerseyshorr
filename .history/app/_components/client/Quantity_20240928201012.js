"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Quantity() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount((prev) => prev + 1);
  }
  function decreaseCount() {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <h5 className="mb-2 text-xs font-semibold uppercase text-primary-800">
        quantity:
      </h5>
      <div className="mb-4 flex w-[30%] flex-row items-center justify-evenly border-[0.5px] border-primary-200 py-2 text-lg">
        <span className="cursor-pointer" onClick={increaseCount}>
          <MinusIcon className="h-4 w-4 text-primary-900" />
        </span>
        <span>{count}</span>
        <span className="cursor-pointer" onClick={decreaseCount}>
          <PlusIcon className="h-4 w-4 text-primary-900" />
        </span>
      </div>
    </div>
  );
}

export default Quantity;
