import ProductList from "@/app/_components/ProductsList";
import { getProducts } from "@/app/_lib/services/productService";

export default async function Page({ params }) {
  const { slug } = params; // Get dynamic slug

  const { byStyle, teams, products } = await getProducts();

  console.log(products);

  // Determine if slug corresponds to a style or a team
  const style = byStyle[slug] ? slug : null;
  const teamSlug = products.find((p) => p.name === slug) ? slug : null;

  let filteredProducts = [];

  if (style) {
    filteredProducts = byStyle[style] || [];
  } else if (teamSlug) {
    filteredProducts = products.find((p) => p.team === teamSlug) || [];
  }

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold">
        {style ? `${style} Styled Jerseys` : `${teamSlug} Jerseys`}
      </h1>
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
}
