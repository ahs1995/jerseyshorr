import Button from "@/app/_components/Button";
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

  const { name, price, size, availableSizes, imageUrl, season, style, team } =
    product;

  return (
    <div>
      {/* product container */}
      <div>
        {/* image */}
        <div>
          {/* big image */}
          <div className="mb-8 shadow-lg">
            <Image src={imageUrl} alt="#" height={600} width={600} />
            <span>Sale!</span>
          </div>
          {/* small images */}
          <div className="flex justify-center gap-2">
            {/*Generate dynamically */}
            <Image src={imageUrl} alt="#" height={100} width={100} />
            <Image src={imageUrl} alt="#" height={100} width={100} />
          </div>
        </div>
        {/*contents  */}
        <div>
          <h3>{name}</h3>
          {/* price */}
          <div>
            <h5>{price}</h5>
            <h5>discounted price</h5>
            <span>discount</span>
          </div>
          {/* size */}
          <div>
            <h5>size</h5>
            {/* generate dynamically */}
            <ul className="flex">
              {availableSizes.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </div>
          {/* quantity */}
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>
        {/*cta buttons */}
        <div>
          <Button>add to cart</Button>
          <Button>buy now</Button>
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
