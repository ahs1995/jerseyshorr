import clientPromise from "@/utils/mongodb";
import ProductCard from "./ProductCard";

async function getProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("jerseyshorr");

    const products = await db.collection("products").find({}).toArray();

    // Group products by style
    const groupedProducts = {
      byStyle: {},
      newArrivals: [],
    };

    products.forEach((product) => {
      // Group by style
      if (!groupedProducts.byStyle[product.style]) {
        groupedProducts.byStyle[product.style] = [];
      }
      groupedProducts.byStyle[product.style].push(product);

      //Check if product is a new arrival

      const createdAt = new Date(product.createdAt);
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      if (createdAt > sevenDaysAgo) {
        groupedProducts.newArrivals.push(product);
      }
    });

    return groupedProducts;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch products");
  }
}
async function ProductList() {
  const { byStyle, newArrivals } = await getProducts();

  return (
    <div>
      {newArrivals.length > 0 && (
        <div>
          <h3 className="text-3xl font-bold">Club Jerseys</h3>
          <div className="p mx-6 my-10 flex flex-wrap justify-between">
            {newArrivals.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
