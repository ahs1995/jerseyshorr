"use client";
import { getItemPrice } from "@/app/_lib/store/cartSlice";
import { useSelector } from "react-redux";

function MiniCartPrice() {
  const totalPrice = useSelector(getItemPrice);
  return (
    <div className="flex justify-between text-sm">
      <div className="flex flex-col gap-2 capitalize text-primary-500">
        <h5>subtotal</h5>
        <h5>shipping</h5>
        <h5>coupon discount</h5>
        <h5 className="font-semibold text-primary-800">total</h5>
      </div>
      <div className="flex flex-col gap-2">
        <span>{`${totalPrice.toFixed(2)}`}</span>
        <span>free</span>
        <span>not apllied</span>
        <span className="font-semibold text-primary-800">{`${totalPrice.toFixed(2)}`}</span>
      </div>
    </div>
  );
}

export default MiniCartPrice;
