import Image from "next/image";
import Button from "./Button";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    // Product card container
    <div className="mb-10 border-2 border-[#1f8a3e]">
      {/* image container */}
      <div className="mb-4 border-2 border-[#ff4b4b]">
        <Image src={imageUrl} width={190} height={190} alt={name} />
      </div>
      {/* contents */}
      <div className="flex flex-col items-center gap-y-2">
        <p>{product.name.replace(/ Jersey$/, "")}</p>
        <Button href="#">Buy Now</Button>
      </div>
    </div>
  );
}

export default ProductCard;
