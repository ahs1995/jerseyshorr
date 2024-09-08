import Image from "next/image";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div className="h-auto w-40 border-2">
      <div className="border-red-500 border-2">
        <Image
          className="h-30 w-30"
          src={imageUrl}
          width={120}
          height={120}
          alt={name}
        />
      </div>

      <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
