import ProductItem from "./ProductItem";

async function Products() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        <ul>
          <li>
            <ProductItem product={product} />
          </li>
        </ul>;
      })}
    </div>
  );
}

export default Products;
