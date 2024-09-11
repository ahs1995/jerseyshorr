import { Suspense } from "react";
import ProductList from "./_components/ProductsList";
import Spinner from "./_components/Spinner";
import CategoryNav from "./_components/CategoryNav";

export default async function Home() {
  return (
    <main className="relative">
      <CategoryNav />
      <div>
        <Suspense fallback={<Spinner />}>
          <ProductList />
        </Suspense>
      </div>
    </main>
  );
}
