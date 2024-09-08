import clientPromise from "@/utils/mongodb";
import ProductCard from "@/app/_components/ProductCard";
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

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <div>
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </main>
  );
}
