"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Quantity from "@/app/_components/client/Quantity";
import {
  deleteItem,
  getCart,
  getItemPrice,
  getItemQuantity,
} from "@/app/_lib/store/cartSlice";
import { TrashIcon } from "@heroicons/react/24/solid";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart);
  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((item) => (
        // item container
        <div
          key={item.jerseyId}
          className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-[1px] border-primary-50 px-2 py-4 md:grid-cols-[auto_3fr_1fr_1fr_1fr]"
        >
          {/* product image */}
          <div>
            <Image
              src={item.image}
              height={100}
              width={100}
              alt="product image"
            />
          </div>

          <div className="col-span-1 grid grid-rows-[1fr_auto] md:col-span-2 md:grid-cols-2 md:grid-rows-1">
            {/* product info */}
            <div className="flex gap-4">
              <div>
                {/* product content */}
                <div className="mb-4 text-sm">
                  <h4 className="text-primary-800">{`${item.jerseyName} season ${item.season}`}</h4>
                  <h4 className="text-primary-500">{item.size}</h4>
                  <h4 className="text-primary-500">{item.style}</h4>
                </div>
              </div>
            </div>

            {/* quantity update box */}
            <div className="flex items-center gap-4 md:items-center md:justify-center">
              <Quantity jerseyId={item.jerseyId} />
              <TrashIcon
                className="h-5 w-5 cursor-pointer text-primary-800"
                onClick={() => dispatch(deleteItem(item.jerseyId))}
              />
            </div>
          </div>

          {/* price details */}
          <div className="hidden md:block">
            <span className="text-md text-primary-600">
              {`Rs. ${item.unitPrice.toFixed(2)}`}
            </span>
          </div>

          <div className="text-primary-800 lg:justify-self-center">
            <span>{`Rs. ${item.totalPrice.toFixed(2)}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
