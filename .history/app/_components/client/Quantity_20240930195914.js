"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

function Quantity({ quantity, setQuantity }) {
  function increment() {
    setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="mb-8">
      <h5 className="mb-2 text-xs font-semibold uppercase text-primary-800">
        quantity:
      </h5>
      <div className="mb-4 flex w-[30%] flex-row items-center justify-evenly border-[0.5px] border-primary-200 py-2 text-lg xl:w-[20%] 2xl:w-[15%]">
        <span className="cursor-pointer" onClick={decrement}>
          <MinusIcon className="h-4 w-4 text-primary-800" />
        </span>
        <span className="text-primary-800">{quantity}</span>
        <span className="cursor-pointer" onClick={increment}>
          <PlusIcon className="h-4 w-4 text-primary-800" />
        </span>
      </div>
    </div>
  );
}

export default Quantity;
