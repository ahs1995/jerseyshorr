function ProductItem({ product }) {
  console.log(product);
  const { id, title, price } = product;
  console.log(title);
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductItem;
