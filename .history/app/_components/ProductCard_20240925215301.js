import Image from "next/image";
import Button from "./Button";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    // Product card container
    <div className="flex flex-col items-center">
      {/* image container */}
      <div className="mb-8 w-full">
        <Image
          src={imageUrl}
          width={190}
          height={190}
          alt={name}
          className="h-auto w-full object-cover"
        />
      </div>
      {/* contents */}
      <div className="flex flex-col items-center gap-y-2 text-center md:gap-y-4">
        <p className="text-base md:text-lg">
          {product.name.replace(/ Jersey$/, "")}
        </p>
        <Button path={`/product/${encodeURIComponent(name)}`}>Buy Now</Button>
      </div>
    </div>
  );
}

export default ProductCard;