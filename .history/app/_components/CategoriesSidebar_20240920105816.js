import { getProducts } from "../_lib/services/productService";

async function CategoriesSidebar() {
  const { byStyle, newArrivals, teams } = await getProducts();
  console.log(newArrivals);

  return <div></div>;
}

export default CategoriesSidebar;
