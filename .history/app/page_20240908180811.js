import { Suspense } from "react";
import ProductList from "./_components/ProductsList";

export default async function Home() {
  return (
    <main>
      <Suspense>
        <ProductList />
      </Suspense>
    </main>
  );
}
