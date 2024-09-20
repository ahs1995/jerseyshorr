import { getProducts } from "../_lib/services/productService";

async function CategoriesSidebar() {
  const { byStyle, newArrivals, teams } = await getProducts();
  return <div></div>;
}

export default CategoriesSidebar;
