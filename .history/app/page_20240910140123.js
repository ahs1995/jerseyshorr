import { Suspense } from "react";
import ProductList from "./_components/ProductsList";
import Spinner from "./_components/Spinner";

export default async function Home() {
  return (
    <main className="bg-primary-50">
      <div className="max-w-[80%] text-center">
        <Suspense fallback={<Spinner />}>
          <ProductList />
        </Suspense>
      </div>
    </main>
  );
}
