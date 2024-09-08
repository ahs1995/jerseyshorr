async function Products() {
  let data = await fetch("https://fakestoreapi.com/products");
  return <div>Hello</div>;
}

export default Products;
