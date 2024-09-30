"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import Quantity from "../_components/client/Quantity";
import { getCart } from "@/app/_lib/store/cartSlice";

function Cart() {
  const cartItems = useSelector(getCart);
  return (
    <div>
      <h2>your cart</h2>
      {/* items container */}
      <div>
        <div>
          <span>product</span>
          <span>total</span>
        </div>
        {cartItems.map((item) => (
          // item container
          <div key={item.jerseyId}>
            {/* product image */}
            <div>
              <Image
                src={item.image}
                height={7}
                width={7}
                alt="product image"
              />
            </div>

            {/* Product details */}
            <div>
              {/* product content */}
              <div>
                <h4>{`${item.jerseyName} ${item.season}`}</h4>
                <h4>{item.size}</h4>
                <h4>{item.style}</h4>
              </div>
              {/* quantity update box */}
              <div>
                <Quantity />
              </div>
            </div>
            {/* price details */}
            <div>
              <span>{item.totalPrice}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Order summary container */}
      {/* CTA buttons */}
    </div>
  );
}

export default Cart;
