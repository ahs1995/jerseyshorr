import { dbConnect } from "@/utils/mongodb";
import redis from "@/lib/redis";
import Product from "@/models/Product";

export async function getProducts() {
  const cacheKey = "products";
  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    console.log("serving from cache");
    return cachedData;
  }

  try {
    await dbConnect();

    const products = await Product.find({}).lean();

    // Transform products to plain JS objects
    const transformedProducts = products.map((product) => ({
      ...product,
      _id: product._id.toString(), // Convert _id to string
      // createdAt: product.createdAt ? product.createdAt.toISOString() : null, // Convert createdAt to ISO string
    }));

    // Group products by style

    const groupedProducts = {
      products: transformedProducts,
      byStyle: {},
      newArrivals: [],
      teams: {},
    };

    const teamSet = new Set();

    transformedProducts.forEach((product) => {
      // Group by style
      if (!groupedProducts.byStyle[product.style]) {
        groupedProducts.byStyle[product.style] = [];
      }
      groupedProducts.byStyle[product.style].push(product);

      // Track unique team
      teamSet.add(product.team);

      //Check if product is a new arrival
      const createdAt = new Date(product.createdAt);
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      if (createdAt > sevenDaysAgo) {
        groupedProducts.newArrivals.push(product);
      }
    });

    // Create team data structure
    groupedProducts.teams = Array.from(teamSet).map((team) => ({
      name: team,
      imageUrl: `/team-logos/${team}.png`,
      productsCount: transformedProducts.filter((p) => p.team === team).length,
    }));

    await redis.setex(cacheKey, 60, JSON.stringify(groupedProducts));
    return groupedProducts;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch product");
  }
}
