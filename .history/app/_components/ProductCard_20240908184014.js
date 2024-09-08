import Image from "next/image";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div className="h-auto w-40 border-2">
      <Image src={imageUrl} width={120} height={120} alt={name} />
      <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
