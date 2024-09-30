"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Quantity from "./Quantity";
import { deleteItem, getCart } from "@/app/_lib/store/cartSlice";
import { TrashIcon } from "@heroicons/react/24/solid";

function Cart() {
  const dispatch = useDispatch();
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
              className="flex flex-row justify-between gap-10 border-[1px] border-primary-50 px-2 py-4"
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
                    <h4 className="text-primary-800">{`${item.jerseyName} season ${item.season}`}</h4>
                    <h4 className="text-primary-500">{item.size}</h4>
                    <h4 className="text-primary-500">{item.style}</h4>
                  </div>
                  {/* quantity update box */}
                  <div className="flex items-center gap-4">
                    <Quantity jerseyId={item.jerseyId} />
                    <TrashIcon
                      className="h-5 w-5 cursor-pointer text-primary-800"
                      onClick={() => dispatch(deleteItem(item.jerseyId))}
                    />
                  </div>
                </div>
              </div>
              {/* price details */}
              <div>
                <span className="text-md text-primary-800">
                  {`Rs. ${item.totalPrice.toFixed(2)}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Order summary container */}
      <div>
        <h3 className="font-semibold uppercase">order summary</h3>
        <div className="flex justify-between text-lg text-primary-600">
          <div>
            <h4>item total</h4>
            <h4>shipping</h4>
          </div>

          <div className="flex flex-col">
            <span>amount</span>
            <span>free</span>
          </div>
        </div>
        <div>
          <div>
            <h3>grand total</h3>
            <h5>(inclusive of all taxes)</h5>
          </div>
          <span>amount</span>
        </div>
      </div>
      {/* CTA buttons */}
    </div>
  );
}

export default Cart;
