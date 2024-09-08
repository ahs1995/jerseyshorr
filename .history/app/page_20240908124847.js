import clientPromise from "@/utils/mongodb";

async function getProducts() {
  try {
    const client = await clientPromise
    const db = client.db("jerseyshorr")

    const products = await db.collection("products").find({}).toArray();
  }
}

export default function Home() {
  return (
    <main>
      <Products />
    </main>
  );
}
