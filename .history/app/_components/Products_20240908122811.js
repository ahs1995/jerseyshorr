import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

async function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const { data } = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return <div>demo</div>;
}

export default Products;
