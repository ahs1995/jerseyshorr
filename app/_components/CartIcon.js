"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { getItemQuantity } from "../_lib/store/cartSlice";

function CartIcon() {
  const totalItemsInCart = useSelector(getItemQuantity);
  return (
    <div className="relative">
      <ShoppingBagIcon className="h-7 w-7 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500" />
      {totalItemsInCart !== 0 && (
        <span className="border-1 absolute right-0 top-[1.2rem] flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 p-[0.5rem] text-[0.6rem] text-accent-50 outline-none">
          {totalItemsInCart}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
