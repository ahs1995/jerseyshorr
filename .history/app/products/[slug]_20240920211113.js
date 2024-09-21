import { getProducts } from "../_lib/services/productService";
import ProductList from "../_components/ProductsList";
import { useSearchParams } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = params; // Get dynamic slug
  const searchParams = useSearchParams();

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
