import Image from "next/image";

function ProductItem({ product }) {
  const { id, title, price, image } = product;
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Image src={image} width={40} height={40} alt="product image" />
    </div>
  );
}

export default ProductItem;
