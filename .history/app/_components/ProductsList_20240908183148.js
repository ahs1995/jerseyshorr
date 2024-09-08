import clientPromise from "@/utils/mongodb";
import ProductCard from "./ProductCard";

async function getProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("jerseyshorr");

    const products = await db.collection("products").find({}).toArray();

    return products;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch products");
  }
}
async function ProductList() {
  const products = await getProducts();
  if (!products.length) return null;
  return (
    <div className="border-2 px-2 py-4">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}

export default ProductList;
