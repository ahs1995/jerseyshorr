// app/_components/server/ProductData.js
import { getProducts } from "../../_lib/services/productService";

async function ProductData({ children }) {
  const { byStyle, teams } = await getProducts();
  return children({ byStyle, teams });
}

export default ProductData;
