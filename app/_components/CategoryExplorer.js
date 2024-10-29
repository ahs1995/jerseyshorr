import { getProducts } from "../_lib/services/productService";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./Sidebar"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const CategorySidebar = dynamic(() => import("./CategorySidebar"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const CategoryNav = dynamic(() => import("./CategoryNav"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Overlay = dynamic(() => import("./Overlay"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

async function CategoryExplorer() {
  const { byStyle, teams } = await getProducts();
  return (
    <>
      <Overlay />
      <Sidebar />
      <CategorySidebar byStyle={byStyle} teams={teams} />
      <CategoryNav byStyle={byStyle} teams={teams} />
    </>
  );
}

export default CategoryExplorer;
