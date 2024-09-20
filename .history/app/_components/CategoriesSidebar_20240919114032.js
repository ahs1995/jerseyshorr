import { getProducts } from "../_lib/services/productService";

async function CategoriesSidebar() {
  const { byStyle, newArrivals, teams } = await getProducts();

  return (
    <div>{Object.entries(byStyle).map((style) => console.log(style))}</div>
  );
}

export default CategoriesSidebar;
