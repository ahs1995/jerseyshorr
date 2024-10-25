// app/_components/Cart.js
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
import Link from "next/link";
import AccountLayout from "@/app/_components/layouts/AccountLayout";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart);
  const totalPrice = useSelector(getItemPrice);
  const totalItemQuantity = useSelector(getItemQuantity);

  return (
    <AccountLayout title="Your Cart">
      {!cartItems.length ? (
        <div className="text-center">
          <h3 className="mb-4 text-lg text-primary-800">
            Your cart is empty! Time to fill it up
          </h3>
          <Link
            href="/"
            className="text-primary-600 underline transition-colors hover:text-primary-800"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          {/*first column*/}
          <div className="lg:max-w-[540px]">
            <div className="mb-6 flex justify-between bg-primary-50 p-4 text-sm font-semibold uppercase text-primary-800">
              <span className="md:basis-[40%]">Product</span>
              <span className="hidden md:block">Quantity</span>
              <span className="hidden md:block">Price</span>
              <span>Subtotal</span>
            </div>
            {/* items container */}
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                // item container
                <div
                  key={item.jerseyId}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-6 border border-primary-50 p-4 transition-shadow hover:shadow-md md:grid-cols-[auto_3fr_1fr_1fr_1fr]"
                >
                  {/* product image */}
                  <div className="relative h-24 w-24">
                    <Image
                      src={item.image}
                      fill
                      className="object-cover"
                      alt={item.jerseyName}
                    />
                  </div>

                  <div className="col-span-1 grid grid-rows-[1fr_auto] gap-4 md:col-span-2 md:grid-cols-2 md:grid-rows-1">
                    {/* product info */}
                    <div>
                      {/* product content */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-primary-800">
                          {`${item.jerseyName} season ${item.season}`}
                        </h4>
                        <div className="space-y-1 text-sm text-primary-600">
                          <p>{item.size}</p>
                          <p>{item.style}</p>
                        </div>
                      </div>
                    </div>

                    {/* quantity update box */}
                    <div className="flex items-center gap-4 md:items-center md:justify-center">
                      <Quantity jerseyId={item.jerseyId} />
                      <button
                        onClick={() => dispatch(deleteItem(item.jerseyId))}
                        className="group transition-colors"
                      >
                        <TrashIcon className="group-hover:text-red-500 h-5 w-5 text-primary-600" />
                      </button>
                    </div>
                  </div>

                  {/* price details */}
                  <div className="hidden md:block">
                    <span className="text-primary-600">
                      {`Rs. ${item.unitPrice.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="font-medium text-primary-800 lg:justify-self-center">
                    <span>{`Rs. ${item.totalPrice.toFixed(2)}`}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* second column */}
          <div className="space-y-8 md:grid md:grid-cols-[1fr_1fr] md:gap-8 lg:flex lg:flex-col lg:items-end lg:justify-start lg:space-y-8">
            {/* coupons */}
            <div className="lg:w-[400px]">
              <Coupons />
            </div>

            {/* order summary */}
            <div className="md:flex md:flex-col lg:w-[400px]">
              <div className="space-y-6 rounded-lg border border-primary-50 p-6">
                <h3 className="font-semibold uppercase text-primary-800">
                  Order Summary
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between text-primary-800">
                    <div className="space-y-2">
                      <p className="capitalize">
                        Item Total {`(${totalItemQuantity} items)`}
                      </p>
                      <p className="capitalize">Shipping</p>
                    </div>

                    <div className="space-y-2 text-right">
                      <p>{`Rs. ${totalPrice.toFixed(2)}`}</p>
                      <p className="uppercase text-primary-600">Free</p>
                    </div>
                  </div>

                  <div className="flex justify-between border-t border-primary-50 pt-4">
                    <div>
                      <p className="font-medium text-primary-800">
                        Grand Total
                      </p>
                      <p className="text-sm text-primary-600">
                        (Inclusive of all taxes)
                      </p>
                    </div>
                    <p className="font-medium text-primary-800">
                      {`Rs. ${totalPrice.toFixed(2)}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-6">
                <Button path="/checkout" size="large">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AccountLayout>
  );
}

export default Cart;
