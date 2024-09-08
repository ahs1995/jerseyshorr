import Image from "next/image";
import Button from "./Button";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div className="mb-10 flex h-auto w-40 flex-col flex-wrap justify-between gap-y-8">
      <div className="h- w-25 h-40 overflow-hidden">
        <Image src={imageUrl} width={150} height={150} alt={name} />
      </div>

      <div className="flex flex-col items-center gap-y-2 text-sm">
        <p>{product.name.replace(/ Jersey$/, "")}</p>
        <Button href="#">Buy Now</Button>
      </div>
    </div>
  );
}

export default ProductCard;
