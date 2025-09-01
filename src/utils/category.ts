import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

export function filteredCategories(data: Product[], category: string) {
  if (category === "all") return data;

  return data.filter((product) =>
    product.category.includes(category as Category),
  );
}
