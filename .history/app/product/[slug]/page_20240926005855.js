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

  console.log(product);

  return (
    <div>
      {/* product container */}
      <div>
        {/* image */}
        <div>
          {/* big image */}
          <div>
            <Image href="#" alt="#" h={1} w={1} />
            <span>Sale!</span>
          </div>
          {/* small images */}
          <div>
            {/*Generate dynamically */}
            <Image href="#" alt="#" h={1} w={1} />
            <Image href="#" alt="#" h={1} w={1} />
          </div>
        </div>
        {/*contents  */}
        <div>
          <h3>name</h3>
          {/* price */}
          <div>
            <h5>price</h5>
            <h5>discounted price</h5>
            <span>discount</span>
          </div>
          {/* size */}
          <div>
            <h5>size</h5>
            {/* generate dynamically */}
            <u>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </u>
          </div>
          {/* quantity */}
          <div>
            <span>-</span>
            <span>number</span>
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
