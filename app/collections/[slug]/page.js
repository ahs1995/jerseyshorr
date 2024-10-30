import ProductList from "@/app/_components/ProductsList";
import { getProducts } from "@/app/_lib/services/productService";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);

  try {
    const { byStyle, teams, products } = await getProducts();

    // Check for style match
    const styleSlug = byStyle[decodedSlug] ? decodedSlug : null;

    // Check for team match
    const teamSlug = products.some(
      (p) => p.team.toLowerCase() === decodedSlug.toLowerCase(),
    )
      ? decodedSlug
      : null;

    if (!styleSlug && !teamSlug) {
      notFound();
    }

    let filteredProducts = [];

    if (styleSlug) {
      filteredProducts = byStyle[styleSlug];
    } else {
      filteredProducts = products.filter(
        (p) => p.team.toLowerCase() === teamSlug.toLowerCase(),
      );
    }

    // Ensure we have products
    if (!filteredProducts?.length) {
      notFound();
    }

    return (
      <div>
        <ProductList
          filteredProducts={filteredProducts}
          filteredCategoryType={styleSlug ? "style" : "team"}
          filteredCategoryName={styleSlug || teamSlug}
        />
      </div>
    );
  } catch (error) {
    console.error(`Error loading products for ${decodedSlug}:`, error);
    throw error; // This will be caught by the closest error boundary
  }
}

// Add metadata generation for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);

  const { byStyle } = await getProducts();
  const isStyle = byStyle[decodedSlug];

  return {
    title: `${decodedSlug} Jerseys`,
    description: `Shop our collection of ${decodedSlug} jerseys at the best prices.`,
  };
}
