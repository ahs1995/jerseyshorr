import clientPromise from "@/utils/mongodb";
import ProductCard from "./ProductCard";
import TeamCard from "./TeamCard";

async function getProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("jerseyshorr");

    const products = await db.collection("products").find({}).toArray();

    // Group products by style
    const groupedProducts = {
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
    groupedProducts.teams = Array.from(teamSet).map((team) => ({
      name: team,
      imageUrl: `/team-logos/${team.toLowerCase()}.png`,
      productsCount: products.filter((p) => p.team === team).length,
    }));

    return groupedProducts;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch products");
  }
}
async function ProductList() {
  const { byStyle, newArrivals, teams } = await getProducts();

  return (
    <div>
      {newArrivals.length > 0 && (
        <div>
          <h3 className="text-3xl font-bold">New Arrivals</h3>
          <div className="p mx-10 my-10 flex flex-wrap justify-between">
            {newArrivals.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      )}

      {Object.entries(byStyle).map(([style, products]) => (
        <div key={style}>
          <h3 className="text-3xl font-bold">{style} Jerseys</h3>
          <div className="p mx-6 my-10 flex flex-wrap justify-between">
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      ))}

      {teams.length > 0 && (
        <div>
          <h3 className="text-3xl font-bold">Team Jerseys</h3>
          <div className="p mx-6 my-10 flex flex-wrap justify-between">
            {teams.map((team) => (
              <TeamCard team={team} key={team.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
