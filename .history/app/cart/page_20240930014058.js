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
          <h3>product: {`${item.jerseyName} ${item.season}`}</h3>
          <h3>size: {item.size}</h3>
          <h3>price: {item.unitPrice}</h3>
          <h3>quantity: {item.quantity}</h3>
          <h3>subtotal: {item.totalPrice}</h3>
        </div>
      ))}
    </div>
  );
}

export default page;
