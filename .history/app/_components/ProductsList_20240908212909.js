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
    <div>
      <h3 className="text-3xl font-black">Club Jerseys</h3>
      <div className="p mx-6 my-10 flex flex-wrap justify-between">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
