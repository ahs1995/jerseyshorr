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
    // products container
    <div className="mx-auto w-[90%] border-2 border-[#403cff] xl:w-[80%]">
      {/* new arrival group */}
      {newArrivals.length > 0 && (
        // Product container
        <div className="pt-8">
          {/* contents */}
          <div className="relative mb-10 text-center">
            <h3 className="mb-2 text-3xl font-bold">New Arrivals</h3>
            <hr className="absolute m-2 mx-auto w-1/2 border-t-2 border-accent-500" />
            <p className="text-xs">
              Grab all new 24-25 season jersey at best price
            </p>
          </div>
          {/* Card container */}
          <div className="grid grid-cols-2 gap-4 border-2 border-[#e38c3b] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
            {newArrivals.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      )}
      {/* styles group */}
      {Object.entries(byStyle).map(([style, products]) => (
        // Product container
        <div key={style} className="pt-8">
          {/* contents */}
          <div className="mb-10 text-center">
            <h3 className="mb-2 text-3xl font-bold">{style} Jerseys</h3>
            <hr className="m-2 mx-auto w-1/2 border-t-2 border-accent-500" />
            <p className="text-xs">
              {style === "Retro"
                ? "Rock in vintage football jersey"
                : style === "Regular"
                  ? "Buy your favourite jersey at best price"
                  : ""}
            </p>
          </div>
          {/* card container */}
          <div className="grid grid-cols-2 gap-4 border-2 border-[#e38c3b] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      ))}

      {/* team group */}
      {teams.length > 0 && (
        // product container
        <div className="border-2 border-[#3bdee3] pt-8">
          {/* contents */}
          <div className="mb-10 text-center">
            <h3 className="mb-2 text-3xl font-bold">Team Jerseys</h3>
            <hr className="m-2 mx-auto w-1/2 border-t-2 border-accent-500" />
            <p className="text-xs">
              Grab all new 24-25 season jersey at best price
            </p>
          </div>
          {/* card container */}
          <div className="grid grid-cols-3 gap-4 border-2 border-[#e38c3b] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
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
