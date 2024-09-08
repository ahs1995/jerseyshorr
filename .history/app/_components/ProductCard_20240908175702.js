import Image from "next/image";

function ProductItem({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <Image src={imageUrl} width={100} height={100} alt="product image" />
    </div>
  );
}

export default ProductItem;
