import { getProducts } from "@/app/_lib/services/productService";

import { useMemo } from "react";

function useCategories() {
  return useMemo(() => {
    const styleCategories = Object.keys(byStyle).map((style) => ({
      name: style,
      type: "style",
    }));
    const teamCategories = teams.map((team) => ({
      name: team.name,
      type: "team",
    }));
    return [...styleCategories, ...teamCategories];
  }, [byStyle, teams]);
}

export default useCategories;
