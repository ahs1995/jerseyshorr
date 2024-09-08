import clientPromise from "@/utils/mongodb";

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
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
