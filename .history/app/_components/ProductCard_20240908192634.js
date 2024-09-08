import Image from "next/image";
import Button from "./Button";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div className="h-auto w-40 border-2">
      <div className="border-red-500 h- w-25 h-40 overflow-hidden border-2">
        <Image src={imageUrl} width={150} height={150} alt={name} />
      </div>

      <div className="item flex flex-col items-center">
        <p>{product.name}</p>
        <Button href="#">Buy Now</Button>
      </div>
    </div>
  );
}

export default ProductCard;
