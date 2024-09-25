import ProductList from "@/app/_components/ProductsList";
import { getProducts } from "@/app/_lib/services/productService";

export default async function Page({ params }) {
  const { slug } = params; // Get dynamic slug
  const decodedSlug = decodeURIComponent(slug); // Decode the URL-encoded slug

  const { byStyle, teams, products } = await getProducts();

  // Determine if slug corresponds to a style or a team
  const styleSlug = byStyle[decodedSlug] ? decodedSlug : null;
  const teamSlug = products.find(
    (p) => p.team.toLowerCase() === decodedSlug.toLowerCase(),
  )
    ? decodedSlug
    : null;

  let filteredProducts = [];

  if (styleSlug) {
    filteredProducts = byStyle[styleSlug] || [];
  } else if (teamSlug) {
    filteredProducts =
      products.filter((p) => p.team.toLowerCase() === teamSlug.toLowerCase()) ||
      [];
  }

  console.log(filteredProducts);

  return (
    <div>
      {/* <h1 className="my-4 text-2xl font-bold">
        {style ? `${style} Styled Jerseys` : `${teamSlug} Jerseys`}
      </h1> */}
      <ProductList
        filteredProducts={filteredProducts}
        filteredCategoryType={styleSlug ? "style" : "team"}
        filteredCategoryName={styleSlug || teamSlug}
      />
    </div>
  );
}
