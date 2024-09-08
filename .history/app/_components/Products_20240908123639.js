import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

async function fetchProducts() {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

async function Products() {
  return <div>demo</div>;
}

export default Products;
