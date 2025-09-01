import { Category } from "@/types/category";
import type { Product } from "@/types/product";

export function filteredCategories(data: Product[], category: string) {
  if (category === "all") return data;

  return data.filter((product) =>
    product.category.includes(category as Category),
  );
}

/**
 * Product가 특정 카테고리를 포함하는지 확인합니다.
 */
export function hasCategory(product: Product, category: Category): boolean {
  return product.category.includes(category);
}

/**
 * Product가 스트리밍 카테고리인지 확인합니다.
 */
export function isStreamingProduct(product: Product): boolean {
  return hasCategory(product, Category.STREAMING);
}
