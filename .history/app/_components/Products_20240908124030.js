import ProductItem from "./ProductItem";

async function fetchProducts() {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

async function Products() {
  const { products } = await fetchProducts();
  console.log(products);
  return <div>demo</div>;
}

export default Products;
