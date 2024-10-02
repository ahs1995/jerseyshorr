"use client";
import { getItemPrice } from "@/app/_lib/store/cartSlice";
import { useSelector } from "react-redux";

function MiniCartPrice() {
  const totalPrice = useSelector(getItemPrice);
  return (
    <div className="flex justify-between text-sm">
      <div className="text-primary-600">
        <h5>subtotal</h5>
        <h5>shipping</h5>
        <h5>coupon discount</h5>
        <h5>total</h5>
      </div>
      <div className="flex flex-col">
        <span>{`${totalPrice.toFixed(2)}`}</span>
        <span>free</span>
        <span>not apllied</span>
        <span>{`${totalPrice.toFixed(2)}`}</span>
      </div>
    </div>
  );
}

export default MiniCartPrice;
