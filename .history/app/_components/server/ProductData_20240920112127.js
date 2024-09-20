// app/products/ProductData.js
import { getProducts } from "../_lib/services/productService";

async function ProductData({ children }) {
  const productData = await getProducts();
  return children(productData);
}

export default ProductData;
