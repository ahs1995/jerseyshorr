// app/products/[slug]/page.js

import { getProducts } from "../../_lib/services/productService";
import ProductList from "../../_components/ProductsList";

export default async function ProductPage({ searchParams }) {
  const style = searchParams.style;
  const team = searchParams.team;

  // Fetch all products
  const { byStyle, teams } = await getProducts();

  let products = [];

  if (style) {
    // Filter products by style
    products = byStyle[style] || [];
  } else if (team) {
    // Filter products by team
    const selectedTeam = teams.find((t) => t.name === team);
    products = selectedTeam ? selectedTeam.products : [];
  }

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold">
        {style ? `${style} Styled Jerseys` : `${team} Jerseys`}
      </h1>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products found for {style || team}</p>
      )}
    </div>
  );
}
