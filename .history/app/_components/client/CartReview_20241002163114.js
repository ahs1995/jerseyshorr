"use client";

import { getCart } from "@/app/_lib/store/cartSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
function CartReview() {
  const cartItems = useSelector(getCart);
  return (
    <div className="border-[1px] border-primary-800">
      <h3 className="text-md mb-6 font-semibold uppercase">Review your cart</h3>
      <div>
        {cartItems.map((item) => (
          <div key={item.jerseyId}>
            {/* item image */}
            <span>{item.image}</span>
            {/* item details */}
            <div>
              <h5>{item.jerseyName}</h5>
              <div className="border-2 border-primary-100">
                <Image
                  src={item.image}
                  alt="item image"
                  height={80}
                  width={80}
                />
              </div>
            </div>
            {/* item total price */}
            <span>{item.totalPrice}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartReview;
