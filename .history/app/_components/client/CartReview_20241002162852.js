"use client";

import { getCart } from "@/app/_lib/store/cartSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
function CartReview() {
  const cartItems = useSelector(getCart);
  return (
    <div>
      <h3 className="text-md font-semibold uppercase">Review your cart</h3>
      <div>
        {cartItems.map((item) => (
          <div key={item.jerseyId}>
            {/* item image */}
            <span>{item.image}</span>
            {/* item details */}
            <div>
              <h5>{item.jerseyName}</h5>
              <span>
                <Image
                  src={item.image}
                  alt="item image"
                  height={100}
                  width={100}
                />
              </span>
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
