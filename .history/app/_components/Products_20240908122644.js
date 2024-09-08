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
  // let data = await fetch("https://fakestoreapi.com/products");
  // let products = await data.json();
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
