"use client";
import { useSelector } from "react-redux";
import { getCart } from "../_lib/store/cartSlice";
import Image from "next/image";
import Quantity from "../_components/client/Quantity";

function page() {
  const cartItems = useSelector(getCart);
  console.log(cartItems);
  return (
    <div>
      {/* items container */}
      <div>
        <div>
          <span>product</span>
          <span>total</span>
        </div>
        {cartItems.map((item) => (
          // item container
          <div key={item._id}>
            {/* product image */}
            <div>
              <Image src={item.image} className="h-7 w-7" alt="product image" />
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

export default page;
