import Button from "@/app/_components/Button";
import ProductDescription from "@/app/_components/client/ProductDescription";
import ProductSize from "@/app/_components/client/ProductSize";
import Quantity from "@/app/_components/client/Quantity";
import { getProducts } from "@/app/_lib/services/productService";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
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
    <div className="mx-auto w-[90%] py-8 lg:py-12 xl:w-[80%]">
      {/* product container */}
      <div className="md:flex md:gap-10 xl:justify-center">
        {/* image */}
        <div className="mb-12 md:w-1/2 xl:w-1/3 2xl:w-1/4">
          {/* big image */}
          <div className="group relative z-[-1] mb-8 h-[300px] w-[300px] overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt="product image"
              height={600}
              width={600}
              className="h-full w-full transform border-[1px] border-primary-50 object-cover shadow-md transition-transform duration-500 ease-in-out group-hover:scale-110"
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
            <h3 className="mb-4 text-2xl text-primary-800 lg:text-3xl">{`${name} [season ${season}]`}</h3>
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
              <div className="flex items-center gap-2">
                <span>add to cart</span>
                <span>
                  <ShoppingCartIcon className="h-5 w-5" />
                </span>
              </div>
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
