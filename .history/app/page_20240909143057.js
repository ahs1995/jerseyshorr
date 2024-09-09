import { Suspense } from "react";
import ProductList from "./_components/ProductsList";
import Spinner from "./_components/Spinner";

export default async function Home() {
  const categories = [
    { type: "style", title: "Style Collection" },
    // You can easily add more categories here, e.g., "competitions" once available
  ];
  return (
    <main>
      <div className="my-5 text-center">
        {categories.map((category) => (
          <Suspense key={category.type} fallback={<Spinner />}>
            <ProductList type={category.type} title={category.title} />
          </Suspense>
        ))}
      </div>
    </main>
  );
}
