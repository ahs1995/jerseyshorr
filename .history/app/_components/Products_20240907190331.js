async function Products() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();
  return <div>Hello</div>;
}

export default Products;
