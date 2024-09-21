import { getProducts } from "@/app/_lib/services/productService";

export default async function Page({ params }) {
  const { slug } = params; // Get dynamic slug

  const { byStyle, teams } = await getProducts();

  // Determine if slug corresponds to a style or a team
  const style = byStyle[slug] ? slug : null;
  const team = teams.find((t) => t.name === slug) ? slug : null;

  let products = [];

  if (style) {
    products = byStyle[style] || [];
  } else if (team) {
    products = teams.find((t) => t.name === team)?.products || [];
  }
}
