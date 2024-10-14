import dbConnect from "@/utils/mongodb";
import Product from "@/models/Product";

export async function getProducts() {
  try {
    await dbConnect();

    const products = await Product.find({}).lean();

    console.log(products);

    // Group products by style

    const groupedProducts = {
      products,
      byStyle: {},
      newArrivals: [],
      teams: {},
    };

    const teamSet = new Set();

    products.forEach((product) => {
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
    groupedProducts.teans = Array.from(teamSet).map((team) => ({
      name: team,
      imageUrl: `/team-logos/${team.toLowerCase()}.png`,
      productsCount: products.filter((p) => p.team === team).length,
    }));

    return groupedProducts;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch product");
  }
}

// import clientPromise from "@/utils/mongodb";
// import { ObjectId } from "mongodb";

// // Get all products documents
// export async function getProducts() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("jerseyshorr");

//     const products = await db.collection("products").find({}).toArray();

//     // Group products by style
//     const groupedProducts = {
//       products,
//       byStyle: {},
//       newArrivals: [],
//       teams: {},
//     };

//     const teamSet = new Set();

//     products.forEach((product) => {
//       // Convert _id and createdAt to plain strings
//       product._id = product._id.toString();
//       product.createdAt =
//         product.createdAt instanceof Date
//           ? product.createdAt.toISOString()
//           : product.createdAt;
//       // Group by style
//       if (!groupedProducts.byStyle[product.style]) {
//         groupedProducts.byStyle[product.style] = [];
//       }
//       groupedProducts.byStyle[product.style].push(product);

//       // Track unique team
//       teamSet.add(product.team);

//       //Check if product is a new arrival
//       const createdAt = new Date(product.createdAt);
//       const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
//       if (createdAt > sevenDaysAgo) {
//         groupedProducts.newArrivals.push(product);
//       }
//     });

//     // Create team data structure
//     groupedProducts.teams = Array.from(teamSet).map((team) => ({
//       name: team,
//       imageUrl: `/team-logos/${team.toLowerCase()}.png`,
//       productsCount: products.filter((p) => p.team === team).length,
//     }));

//     return groupedProducts;
//   } catch (e) {
//     console.error(e);
//     throw new Error("Failed to fetch products");
//   }
// }
