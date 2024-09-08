import ProductList from "./_components/ProductsList";

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <ProductList />
    </main>
  );
}
