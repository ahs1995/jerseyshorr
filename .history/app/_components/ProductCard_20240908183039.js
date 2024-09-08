import Image from "next/image";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div className="h-auto w-40 text-center">
      <Image src={imageUrl} width={120} height={120} alt={name} />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
