function ProductItem({ product }) {
  console.log(product);
  const { id, title, price, image } = product;
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductItem;
