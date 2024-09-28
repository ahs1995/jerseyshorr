import Button from "@/app/_components/Button";
import Quantity from "@/app/_components/client/Quantity";
import { getProducts } from "@/app/_lib/services/productService";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

async function page({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); // Decode the URL-encoded slug
  const { byStyle, teams, products } = await getProducts();

  // Find the product that matches with the slug
  const product = products.find(
    (p) => p.name.toLowerCase() === decodedSlug.toLowerCase(),
  );

  const { name, price, size, imageUrl, season, discount, style, team } =
    product;

  return (
    <div className="mx-auto w-[90%] py-8">
      {/* product container */}
      <div>
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
          <div className="mb-8">
            <h5 className="mb-2 text-xs font-semibold uppercase text-primary-800">
              size:
            </h5>
            {/* generate dynamically */}
            <ul className="flex gap-2">
              {size.map((size, index) => (
                <li
                  className="cursor-pointer border-[0.5px] border-primary-200 px-4 py-2 text-sm"
                  key={index}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          {/* quantity */}
          <Quantity />
        </div>
        {/*cta buttons */}
        <div className="flex flex-row items-center gap-4 capitalize">
          <Button size="large">add to cart</Button>
          <Button size="large" variant="secondary">
            <div className="flex items-center gap-2">
              <span>buy now</span>
              <span className="inline-block">
                <ArrowRightIcon className="h-4 w-4 font-bold" />
              </span>
            </div>
          </Button>
        </div>
        {/* description */}
        <div>
          <h5>product description</h5>
        </div>
        {/* related products */}
      </div>
    </div>
  );
}

export default page;
