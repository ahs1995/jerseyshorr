import Image from "next/image";

function ProductItem({ product }) {
  console.log(product);
  const { id, title, price, image } = product;
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Image src={image} width={20} height={20} alt="product image" />
    </div>
  );
}

export default ProductItem;
