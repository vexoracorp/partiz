import { MockProducts } from "@/mock/product";
import type { Plan, Product } from "@/types/product";

export default function getProductParty(
  id: string,
  partyId: string,
): { product: Product; party: Plan } {
  const product = MockProducts.find(
    (product) =>
      product.id === id && product.plan.find((plan) => plan.id === partyId),
  );

  if (!product) {
    throw new Error("Product not found");
  }

  const party = product.plan.find((plan) => plan.id === partyId);

  if (!party) {
    throw new Error("Party not found");
  }

  return { product, party };
}
