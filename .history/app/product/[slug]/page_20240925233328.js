import Button from "@/app/_components/Button";

function page({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); // Decode the URL-encoded slug
  return (
    <div>
      {/* product container */}
      <div>
        {/* image */}
        <div>
          {/* big image */}
          <div>
            <Image src="#" alt="#" />
            <span>Sale!</span>
          </div>
          {/* small images */}
          <div>
            {/*Generate dynamically */}
            <Image src="#" alt="#" />
            <Image src="#" alt="#" />
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
        {/* related products */}
      </div>
    </div>
  );
}

export default page;
