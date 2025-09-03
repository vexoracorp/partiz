import type { Plan, Product } from "./product";

// 구독 상태 타입
export type SubscriptionStatus = "active" | "expired" | "cancelled" | "pending";

// 사용자가 구독한 항목
export interface Subscription {
  // 기본 구독 정보
  id: string;

  startDate: Date;
  endDate: Date;
  status: SubscriptionStatus;

  // 메타데이터
  createdAt?: Date;
  updatedAt?: Date;

  product: Product;
  plan: Plan;
}
