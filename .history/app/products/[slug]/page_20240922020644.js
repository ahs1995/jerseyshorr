import ProductList from "@/app/_components/ProductsList";
import { getProducts } from "@/app/_lib/services/productService";

export default async function Page({ params }) {
  const { slug } = params; // Get dynamic slug

  const { byStyle, teams, products } = await getProducts();

  // Determine if slug corresponds to a style or a team
  const style = byStyle[slug] ? slug : null;
  const teamSlug = teams.find((t) => t.team === slug) ? slug : null;

  let filteredProducts = [];

  if (style) {
    filteredProducts = byStyle[style] || [];
  } else if (teamSlug) {
    filteredProducts = teams.find((t) => t.team === teamSlug) || [];
  }

  console.log(products);

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold">
        {style ? `${style} Styled Jerseys` : `${teamSlug} Jerseys`}
      </h1>
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
}