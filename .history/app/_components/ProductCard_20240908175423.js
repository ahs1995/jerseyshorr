import Image from "next/image";

function ProductItem({ product }) {
  const { id, name, price, image } = product;
  console.log(image);
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <Image src={image} width={100} height={100} alt="product image" />
    </div>
  );
}

export default ProductItem;
