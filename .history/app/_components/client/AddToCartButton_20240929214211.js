"use client";

import { ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import ProductSize from "./ProductSize";
import Quantity from "./Quantity";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { useState } from "react";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // const newItem = {
    //   jerseyId : _id,
    //   name,
    //   quantity: 1,
    //   unitPrice: price,
    //   totalPrice: unitPrice * 1,
    //   season,
    //   selectedSize: S
    // };
    // dispatch(addItem(newItem))
    console.log(product._id);
  }

  return (
    <div>
      {/* size selector */}
      <ProductSize size={product.size} setSelectedSize={setSelectedSize} />

      {/* quantity selector */}
      <Quantity quantity={quantity} setQuantity={setQuantity} />

      {/* add to cart button */}
      <div className="mb-8 flex flex-row items-center gap-4 capitalize">
        <Button size="large" variant="secondary" onClick={handleAddToCart}>
          <div className="flex items-center gap-2">
            <span>add to cart</span>
            <span>
              <ShoppingCartIcon className="h-5 w-5" />
            </span>
          </div>
        </Button>
        {/* <Button size="large" variant="primary">
              <div className="flex items-center gap-1">
                <span>buy now</span>
                <span>
                  <ChevronRightIcon className="h-5 w-5" />
                </span>
              </div>
            </Button> */}
      </div>
    </div>
  );
}

export default AddToCartButton;
