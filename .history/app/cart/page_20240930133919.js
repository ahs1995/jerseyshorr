"use client";
import { useDispatch, useSelector } from "react-redux";
import { getCart, loadCart } from "../_lib/store/cartSlice";
import Image from "next/image";
import Quantity from "../_components/client/Quantity";
import { useEffect } from "react";

function page() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart);

  // load cart from localStorage on component mount
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  // Sync cart with localStorage whenever the cart items change

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
          <div key={item._id}>
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

export default page;
