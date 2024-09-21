import ProductList from "@/app/_components/ProductsList";
import { getProducts } from "@/app/_lib/services/productService";

export default async function Page({ params }) {
  const { slug } = params; // Get dynamic slug

  const { byStyle, teams } = await getProducts();

  // Determine if slug corresponds to a style or a team
  const style = byStyle[slug] ? slug : null;
  const team = teams.find((t) => t.name === slug) ? slug : null;

  let products = [];

  if (style) {
    products = byStyle[style] || [];
  } else if (team) {
    products = teams.find((t) => t.name === team)?.products || [];
  }

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold">
        {style ? `${style} Styled Jerseys` : `${team} Jerseys`}
      </h1>
      <ProductList filteredProducts={products} />
    </div>
  );
}
