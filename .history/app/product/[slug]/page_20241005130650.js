import AddToCartButton from "@/app/_components/client/AddToCartButton";
import ProductDescription from "@/app/_components/client/ProductDescription";
import { getProducts } from "@/app/_lib/services/productService";
import Image from "next/image";

async function page({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); // Decode the URL-encoded slug
  const { byStyle, teams, products } = await getProducts();

  // Find the product that matches with the slug
  const product = products.find(
    (p) => p.name.toLowerCase() === decodedSlug.toLowerCase(),
  );

  const {
    _id,
    name,
    price,
    size,
    imageUrl,
    season,
    discount,
    description,
    style,
    team,
    material,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  // Fix padding. the child container of page element should have paddings.

  return (
    <div className="mx-auto w-[90%] py-8 lg:py-12 xl:w-[80%]">
      {/* product container */}
      <div className="md:flex md:gap-10 xl:justify-center">
        {/* image */}
        <div className="mb-12 md:w-1/2 xl:w-1/3 2xl:w-1/4">
          {/* big image */}
          <div className="relative z-[-1] mb-8 shadow-lg">
            <Image
              src={imageUrl}
              alt="product image"
              height={600}
              width={600}
            />
            <span className="absolute left-4 top-2 text-lg text-accent-400">
              Sale!
            </span>
          </div>
          {/* small images */}
          <div className="flex justify-center gap-6">
            {/*Generate dynamically */}
            <Image
              src={imageUrl}
              alt="product image"
              height={100}
              width={100}
              className="border-[1px] border-primary-50 shadow-md"
            />
            <Image
              src={imageUrl}
              alt="product image"
              height={100}
              width={100}
              className="border-[1px] border-primary-50 shadow-md"
            />
          </div>
        </div>

        {/*contents  */}
        <div className="md:w-1/2">
          <div>
            <h3 className="mb-4 text-primary-800 md:text-2xl lg:text-3xl">{`${name} [season ${season}]`}</h3>
            {/* price */}
            <div className="mb-8 flex items-center gap-6 text-2xl">
              <h5 className="l text-accent-400 line-through">
                <span>&#8377; </span>
                {`${price}`}
              </h5>
              <h5>
                <span>&#8377; </span>
                {discountedPrice.toFixed(2)}
              </h5>
            </div>
          </div>
          <AddToCartButton
            product={product}
            discountedPrice={discountedPrice}
          />
          {/* description */}
          <ProductDescription
            content={description}
            name={name}
            material={material}
            season={season}
          />
          {/* related products */}
        </div>
      </div>
    </div>
  );
}

export default page;
