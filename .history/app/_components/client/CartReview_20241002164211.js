"use client";

import { getCart } from "@/app/_lib/store/cartSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
function CartReview() {
  const cartItems = useSelector(getCart);
  return (
    <div className="border-[1px] border-primary-800">
      <h3 className="text-md mb-6 font-semibold uppercase">Review your cart</h3>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div key={item.jerseyId} className="flex gap-4">
            {/* item image */}
            <span>
              <Image
                src={item.image}
                alt="item image"
                height={80}
                width={80}
                className="rounded-md border-[1px] border-primary-100"
              />
            </span>
            {/* item details */}
            <div className="flex flex-col">
              <div className="flex-none">
                <h5 className="text-xs">{item.jerseyName}</h5>
                <span className="text-xs text-primary-400">
                  {`${item.quantity}x`}
                </span>
              </div>
              {/* item total price */}
              <span className="text-xs font-semibold">{`${item.totalPrice.toFixed(2)}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartReview;
