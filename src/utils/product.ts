import type { Plan, Product } from "@/types/product";

/**
 * Plan의 가장 최소 가격을 구합니다.
 * 할인 가격이 있으면 할인 가격을, 없으면 일반 가격을 비교합니다.
 */
export const getMinPlanPrice = (plans: Plan[]): number => {
  if (!plans || plans.length === 0) {
    return 0;
  }

  return Math.min(
    ...plans.map((plan) =>
      plan.discountPrice > 0 ? plan.discountPrice : plan.price,
    ),
  );
};

/**
 * Product의 가장 최소 가격을 구합니다.
 */
export const getMinProductPrice = (product: Product): number => {
  return getMinPlanPrice(product.plan);
};

/**
 * 여러 Product들 중에서 가장 최소 가격을 구합니다.
 */
export const getMinPriceFromProducts = (products: Product[]): number => {
  if (!products || products.length === 0) {
    return 0;
  }

  return Math.min(...products.map(getMinProductPrice));
};

/**
 * Plan의 실제 표시 가격을 구합니다 (할인 가격 우선, 없으면 일반 가격).
 */
export const getDisplayPrice = (plan: Plan): number => {
  return plan.discountPrice > 0 ? plan.discountPrice : plan.price;
};

/**
 * Product의 가장 저렴한 플랜을 구합니다.
 */
export const getCheapestPlan = (product: Product): Plan | null => {
  if (!product.plan || product.plan.length === 0) {
    return null;
  }

  return product.plan.reduce((cheapest, current) => {
    const cheapestPrice = getDisplayPrice(cheapest);
    const currentPrice = getDisplayPrice(current);
    return currentPrice < cheapestPrice ? current : cheapest;
  });
};

/**
 * Product 배열에서 ID로 특정 상품을 찾습니다.
 */
export const findProductById = (
  products: Product[],
  id: string,
): Product | undefined => {
  return products.find((product) => product.id === id);
};
