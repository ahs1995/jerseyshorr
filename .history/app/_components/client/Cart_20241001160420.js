"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Quantity from "./Quantity";
import {
  deleteItem,
  getCart,
  getItemPrice,
  getItemQuantity,
} from "@/app/_lib/store/cartSlice";
import { TrashIcon } from "@heroicons/react/24/solid";
import Button from "../Button";
import Coupons from "../Coupons";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart);
  const totalPrice = useSelector(getItemPrice);
  const totalItemQuantity = useSelector(getItemQuantity);
  return (
    <div className="py-6">
      <h2 className="text-md mb-6 font-semibold uppercase text-primary-800">
        your cart
      </h2>
      {/* items*/}
      <div className="mb-8">
        <div className="mb-8 flex justify-between bg-white-50 p-4 text-xs font-semibold uppercase text-primary-800">
          <span>product</span>
          <span>price</span>
          <span>quantity</span>
          <span>total</span>
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
      {/* coupon */}
      <div className="mb-6">
        <Coupons />
      </div>

      {/* Order summary */}
      <div className="mb-16 border-b-[1px] border-t-[1px] border-primary-50 py-4">
        <h3 className="mb-4 font-semibold uppercase">order summary</h3>

        <div className="capitalize">
          <div className="mb-4 flex justify-between text-lg text-primary-800">
            <div className="flex flex-col gap-2">
              <h4>item total {`(${totalItemQuantity} items)`}</h4>
              <h4>shipping</h4>
            </div>

            <div className="flex flex-col gap-2">
              <span>{`Rs. ${totalPrice.toFixed(2)}`}</span>
              <span className="self-end text-sm uppercase">free</span>
            </div>
          </div>
          <div className="flex justify-between border-t-[1px] border-primary-50 pt-4">
            <div>
              <h3>grand total</h3>
              <h5 className="text-sm text-primary-700">
                (inclusive of all taxes)
              </h5>
            </div>
            <span>{`Rs. ${totalPrice.toFixed(2)}`}</span>
          </div>
        </div>
      </div>
      {/* CTA buttons */}
      <Button size="large">checkout</Button>
    </div>
  );
}

export default Cart;
