"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { getItemQuantity } from "../_lib/store/cartSlice";

function CartIcon() {
  const totalItemsInCart = useSelector(getItemQuantity);
  return (
    <div className="relative border-2 border-primary-800">
      <ShoppingBagIcon className="z-[-50] h-7 w-7 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500" />
      {totalItemsInCart !== 0 && (
        <span className="z-100 absolute right-0 top-[0.8rem] rounded-full bg-accent-400 p-0 text-[0.5rem] text-accent-50 outline-none">
          {totalItemsInCart}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
