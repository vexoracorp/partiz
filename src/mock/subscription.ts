import type { Subscription } from "../types/subscription";

import { MockProducts } from "./product";

// 헬퍼 함수: Product와 Plan을 찾아서 Subscription 객체 생성
const createSubscription = (
  id: string,
  productId: string,
  planId: string,
  startDate: Date,
  endDate: Date,
  status: "active" | "expired" | "cancelled" | "pending",
): Subscription => {
  const product = MockProducts.find((p) => p.id === productId)!;
  const plan = product.plan.find((pl) => pl.id === planId)!;

  return {
    id,
    startDate,
    endDate,
    status,
    createdAt: startDate,
    updatedAt: startDate,
    product,
    plan,
  };
};

export const MockUserSubscriptions: Subscription[] = [
  createSubscription(
    "sub_001",
    "p_ai_001", // ChatGPT Plus
    "pl_ai_001",
    new Date("2024-11-01"),
    new Date("2025-06-15"),
    "active",
  ),
  createSubscription(
    "sub_002",
    "p_music_001", // Spotify Premium
    "pl_music_001",
    new Date("2024-10-15"),
    new Date("2025-04-20"),
    "active",
  ),
  createSubscription(
    "sub_003",
    "p_stream_001", // Netflix
    "pl_stream_001",
    new Date("2024-09-01"),
    new Date("2024-12-01"),
    "expired",
  ),
  createSubscription(
    "sub_004",
    "p_ai_002", // Claude Pro
    "pl_ai_002",
    new Date("2024-11-10"),
    new Date("2025-08-25"),
    "active",
  ),
  createSubscription(
    "sub_005",
    "p_music_004", // YouTube Music
    "pl_music_004",
    new Date("2024-11-01"),
    new Date("2025-05-01"),
    "active",
  ),
  createSubscription(
    "sub_006",
    "p_ai_004", // Perplexity Pro
    "pl_ai_004",
    new Date("2024-10-20"),
    new Date("2025-07-20"),
    "active",
  ),
];

// 구독 정보와 상품 정보를 조합하는 헬퍼 함수 (이미 product와 plan이 포함되어 있음)
export const getSubscriptionWithProduct = (): Subscription[] => {
  return MockUserSubscriptions;
};

// 구독하지 않은 상품들을 반환하는 헬퍼 함수
export const getUnsubscribedProducts = (): Subscription[] => {
  const subscribedProductIds = MockUserSubscriptions.filter(
    (sub) => sub.status === "active",
  ).map((sub) => sub.product.id);

  return MockProducts.filter(
    (product) => !subscribedProductIds.includes(product.id),
  ).map((product) => {
    // 각 상품의 첫 번째 플랜을 기본으로 사용
    const plan = product.plan[0];
    return {
      id: `unsub_${product.id}`,
      startDate: new Date(),
      endDate: new Date(),
      status: "pending" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
      product,
      plan,
    };
  });
};

export const getSubscriptionById = (id: string): Subscription | undefined => {
  return MockUserSubscriptions.find((sub) => sub.id === id);
};
