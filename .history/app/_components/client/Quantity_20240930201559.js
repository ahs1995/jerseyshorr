"use client";
import {
  decreaseItemQuantity,
  getCurrentQuantity,
} from "@/app/_lib/store/cartSlice";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

function Quantity({ quantity, setQuantity, jerseyId }) {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(
    jerseyId ? getCurrentQuantity(jerseyId) : () => 0,
  );

  const currentQuantity = quantity ?? cartQuantity;

  function increment() {
    if (setQuantity) {
      setQuantity(currentQuantity + 1);
    }
  }
  function decrement() {
    if (setQuantity) {
      if (currentQuantity > 1) setQuantity(currentQuantity - 1);
    } else {
      if (currentQuantity > 1) dispatch(decreaseItemQuantity(jerseyId));
    }
  }

  return (
    <div className="mb-8">
      <h5 className="mb-2 text-xs font-semibold uppercase text-primary-800">
        quantity:
      </h5>
      <div className="mb-4 flex w-[30%] flex-row items-center justify-evenly border-[0.5px] border-primary-200 py-2 text-lg xl:w-[20%] 2xl:w-[15%]">
        <span className="cursor-pointer" onClick={decrement}>
          <MinusIcon className="h-4 w-4 text-primary-800" />
        </span>
        <span className="text-primary-800">{currentQuantity}</span>
        <span className="cursor-pointer" onClick={increment}>
          <PlusIcon className="h-4 w-4 text-primary-800" />
        </span>
      </div>
    </div>
  );
}

export default Quantity;