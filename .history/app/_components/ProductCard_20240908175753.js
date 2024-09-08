import Image from "next/image";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div>
      <Image src={imageUrl} width={100} height={100} alt={name} />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
