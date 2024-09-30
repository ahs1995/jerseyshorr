"use client";
import { useSelector } from "react-redux";
import { getCart } from "../_lib/store/cartSlice";

function page() {
  const cartItems = useSelector(getCart);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        // item container
        <div key={item._id}>
          <h3>product: {`${item.name} ${item.season}`}</h3>
          <h3>{item.unitPrice}</h3>
        </div>
      ))}
    </div>
  );
}

export default page;
