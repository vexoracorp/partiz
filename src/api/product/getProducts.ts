import { MockProducts } from "@/mock/product";
import type { Product } from "@/types/product";

export default function getProducts(): Product[] {
  return MockProducts;
}
