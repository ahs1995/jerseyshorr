"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import Quantity from "./Quantity";
import { getCart } from "@/app/_lib/store/cartSlice";

function Cart() {
  const cartItems = useSelector(getCart);
  return (
    <div className="py-6">
      <h2 className="mb-8 text-xl font-semibold uppercase text-primary-800">
        your cart
      </h2>
      {/* items*/}
      <div>
        <div className="mb-8 flex justify-between text-xs font-semibold uppercase text-primary-800">
          <span>product</span>
          <span>price</span>
        </div>
        {/* items container */}
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            // item container
            <div
              key={item.jerseyId}
              className="flex flex-row justify-between border-2 border-primary-100 px-2 py-4"
            >
              {/* product */}
              <div className="flex gap-4">
                {/* product image */}
                <div className="pt-4">
                  <Image
                    src={item.image}
                    height={100}
                    width={100}
                    alt="product image"
                  />
                </div>

                {/* Product details */}
                <div>
                  {/* product content */}
                  <div className="mb-4 text-sm">
                    <h4 className="font-semibold text-primary-600">{`${item.jerseyName} season ${item.season}`}</h4>
                    <h4 className="text-primary-500">{item.size}</h4>
                    <h4 className="text-primary-500">{item.style}</h4>
                  </div>
                  {/* quantity update box */}
                  <div>
                    <Quantity />
                  </div>
                </div>
              </div>
              {/* price details */}
              <div>
                <span className="text-sm font-semibold text-primary-800">
                  {item.totalPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Order summary container */}
      {/* CTA buttons */}
    </div>
  );
}

export default Cart;
