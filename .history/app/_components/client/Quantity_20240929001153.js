"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Quantity() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="mb-8">
      <h5 className="mb-2 text-xs font-semibold uppercase text-primary-800">
        quantity:
      </h5>
      <div className="mb-4 flex w-[30%] flex-row items-center justify-evenly border-[0.5px] border-primary-200 py-2 text-lg 2xl:w-[10%]">
        <span className="cursor-pointer" onClick={decrement}>
          <MinusIcon className="h-4 w-4 text-primary-800" />
        </span>
        <span className="text-primary-800">{count}</span>
        <span className="cursor-pointer" onClick={increment}>
          <PlusIcon className="h-4 w-4 text-primary-800" />
        </span>
      </div>
    </div>
  );
}

export default Quantity;
