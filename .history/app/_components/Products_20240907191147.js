import ProductItem from "./ProductItem";

async function Products() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();
  return (
    <div>
      {products.map((product) => {
        <ul>
          <li>
            <ProductItem product={product} />
          </li>
        </ul>;
      })}
      <span>Hello</span>
    </div>
  );
}

export default Products;
