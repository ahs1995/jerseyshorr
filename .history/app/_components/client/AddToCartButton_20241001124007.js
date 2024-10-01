"use client";

import { ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import ProductSize from "./ProductSize";
import Quantity from "./Quantity";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "@/app/_lib/store/cartSlice";
import toast from "react-hot-toast";

function AddToCartButton({ product, discountedPrice }) {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    const newItem = {
      jerseyId: product._id,
      jerseyName: product.name,
      quantity: quantity,
      unitPrice: discountedPrice,
      totalPrice: discountedPrice * quantity,
      season: product.season,
      size: selectedSize,
      image: product.imageUrl,
      style: product.style,
    };
    dispatch(addItem(newItem));
    toast.success("Item added to cart successfully!");
  }

  return (
    <div>
      {/* size selector */}
      <ProductSize size={product.size} setSelectedSize={setSelectedSize} />

      {/* quantity selector */}
      <Quantity quantity={quantity} setQuantity={setQuantity} />

      {/* add to cart button */}
      <div className="mb-8 flex flex-row items-center gap-4">
        <Button size="medium" onClick={handleAddToCart}>
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
