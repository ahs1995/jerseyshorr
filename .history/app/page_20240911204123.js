import { Suspense } from "react";
import ProductList from "./_components/ProductsList";
import Spinner from "./_components/Spinner";

export default async function Home() {
  return (
    <main>
      <div className="container">
        <Suspense fallback={<Spinner />}>
          <ProductList />
        </Suspense>
      </div>
    </main>
  );
}
