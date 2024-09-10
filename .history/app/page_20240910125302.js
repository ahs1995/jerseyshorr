import { Suspense } from "react";
import ProductList from "./_components/ProductsList";
import Spinner from "./_components/Spinner";

export default async function Home() {
  return (
    <main className="bg-primary-100">
      <div className="my-5 text-center">
        <Suspense fallback={<Spinner />}>
          <ProductList />
        </Suspense>
      </div>
    </main>
  );
}
