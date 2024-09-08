import Image from "next/image";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div className="h-auto w-40 border-2">
      <div className="border-red-500 h- w-25 h-45 overflow-hidden border-2">
        <Image src={imageUrl} width={150} height={150} alt={name} />
      </div>

      <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
