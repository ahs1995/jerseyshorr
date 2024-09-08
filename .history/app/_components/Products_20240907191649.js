import ProductItem from "./ProductItem";

async function Products() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();
  return (
    <div>
      {products.map((product) => {
        <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
}

export default Products;
