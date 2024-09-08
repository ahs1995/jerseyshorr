async function Products() {
  let data = await fetch("https://fakestoreapi.com/products");
  let products = await data.json();
  console.log(products);
  return <div>Hello</div>;
}

export default Products;
