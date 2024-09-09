import clientPromise from "@/utils/mongodb";
import ProductCard from "./ProductCard";

async function getProducts(type) {
  try {
    const client = await clientPromise;
    const db = client.db("jerseyshorr");

    let query = {};

    if (type === "style") {
      // For products with 'regular' or 'retro' style
      query = { style: { $in: ["regular", "retro"] } };
    } else if (type === "newArrivals") {
      // Fetch products created in the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      query = { createdAt: { $gte: thirtyDaysAgo } };
    }

    const products = await db.collection("products").find(query).toArray();
    return products;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch products");
  }
}
async function ProductList({ type, title }) {
  const products = await getProducts(type);
  if (!products.length) return null;
  return (
    <div>
      <h3 className="text-3xl font-bold">Club Jerseys</h3>
      <div className="p mx-6 my-10 flex flex-wrap justify-between">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
