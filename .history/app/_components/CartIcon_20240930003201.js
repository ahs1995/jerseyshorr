"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { getItemQuantity } from "../_lib/store/cartSlice";

function CartIcon() {
  const totalItemsInCart = useSelector(getItemQuantity);
  return (
    <div className="relative">
      <ShoppingBagIcon className="h-7 w-7 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500" />
      <span className="absolute right-0 top-[0.8rem] rounded-md bg-accent-400 p-2 text-xs text-accent-50">
        {totalItemsInCart}
      </span>
    </div>
  );
}

export default CartIcon;
