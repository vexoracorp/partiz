import { MockProducts } from "@/mock/product";
import type { Product } from "@/types/product";

export default function getProduct(id: string): Product | null {
  const product = MockProducts.find((product) => product.id === id);
  return product || null;
}
