import { getProducts } from "../_lib/services/productService";
import ProductList from "../_components/ProductsList";
import { useSearchParams } from "next/navigation";

export default async function ProductPage() {
  const searchParams = useSearchParams();

  const style = searchParams.get("style")
    ? decodeURIComponent(searchParams.get("style"))
    : null;
  const team = searchParams.get("team")
    ? decodeURIComponent(searchParams.get("team"))
    : null;

  // Fetch all products
  const { byStyle, teams } = await getProducts();

  let products = [];

  if (style) {
    // Filter products by style
    products = byStyle[style] || [];
  } else if (team) {
    // Filter products by team
    products = teams.find((t) => t.name === team)?.products || [];
  }

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold">
        {style ? `${style} Styled Jerseys` : `${team} Jerseys`}
      </h1>
      <ProductList products={products} />
    </div>
  );
}
