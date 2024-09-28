import Button from "@/app/_components/Button";
import ProductDescription from "@/app/_components/client/ProductDescription";
import ProductSize from "@/app/_components/client/ProductSize";
import Quantity from "@/app/_components/client/Quantity";
import { getProducts } from "@/app/_lib/services/productService";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
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

  return (
    <div className="mx-auto w-[90%] py-8">
      {/* product container */}
      <div className="md:flex">
        {/* image */}
        <div className="mb-12">
          {/* big image */}
          <div className="relative mb-8 shadow-lg">
            <Image src={imageUrl} alt="#" height={600} width={600} />
            <span className="absolute left-4 top-2 text-lg text-accent-400">
              Sale!
            </span>
          </div>
          {/* small images */}
          <div className="flex justify-center gap-6">
            {/*Generate dynamically */}
            <Image
              src={imageUrl}
              alt="#"
              height={100}
              width={100}
              className="border-[1px] border-primary-50 shadow-md"
            />
            <Image
              src={imageUrl}
              alt="#"
              height={100}
              width={100}
              className="border-[1px] border-primary-50 shadow-md"
            />
          </div>
        </div>

        {/*contents  */}
        <div>
          <div>
            <h3 className="mb-4 text-2xl text-primary-800">{`${name} [season ${season}]`}</h3>
            {/* price */}
            <div className="mb-8 flex items-center gap-6 text-2xl">
              <h5 className="l text-accent-400 line-through">
                <span>&#8377; </span>
                {`${price}`}
              </h5>
              <h5>
                <span>&#8377; </span>
                {(price - (price * discount) / 100).toFixed(2)}
              </h5>
            </div>
            {/* size */}
            <ProductSize size={size} />
            {/* quantity */}
            <Quantity />
          </div>
          {/*cta buttons */}
          <div className="mb-8 flex flex-row items-center gap-4 capitalize">
            <Button size="large" variant="secondary">
              add to cart
            </Button>
            <Button size="large" variant="primary">
              <div className="flex items-center gap-1">
                <span>buy now</span>
                <span>
                  <ChevronRightIcon className="h-5 w-5" />
                </span>
              </div>
            </Button>
          </div>
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
