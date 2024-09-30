"use client";
import { useSelector } from "react-redux";
import { getCart } from "../_lib/store/cartSlice";
import Image from "next/image";

function page() {
  const cartItems = useSelector(getCart);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        // item container
        <div key={item._id}>
          <Image className="h-7 w-7">{product.image}</Image>
          <h3>product: {`${item.jerseyName} ${item.season}`}</h3>
          <h3>size: {item.size}</h3>
          <h3>price: {item.unitPrice}</h3>
          <h3>quantity: {item.quantity}</h3>
          <h3>subtotal: {item.totalPrice.toFixed(2)}</h3>
        </div>
      ))}
    </div>
  );
}

export default page;
