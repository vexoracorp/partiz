import { MockProducts } from "./product";

// 사용자의 구독 정보 목 데이터
export interface UserSubscription {
  id: string;
  productId: string;
  planId: string;
  startDate: Date;
  endDate: Date;
  status: "active" | "expired" | "cancelled";
  isParty: boolean;
  partyId?: string;
  currentMembers?: number; // 현재 파티 멤버 수
  maxMembers?: number;     // 최대 파티 멤버 수
}

export const MockUserSubscriptions: UserSubscription[] = [
  {
    id: "sub_001",
    productId: "p_ai_001", // ChatGPT Plus
    planId: "pl_ai_001",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2025-06-15"), // 약 6개월 후
    status: "active",
    isParty: true,
    partyId: "party_001",
    currentMembers: 3,
    maxMembers: 4
  },
  {
    id: "sub_002", 
    productId: "p_music_001", // Spotify Premium
    planId: "pl_music_001",
    startDate: new Date("2024-10-15"),
    endDate: new Date("2027-04-20"), // 약 4개월 후
    status: "active",
    isParty: true,
    partyId: "party_spotify",
    currentMembers: 2,
    maxMembers: 4
  },
  {
    id: "sub_003",
    productId: "p_stream_001", // Netflix
    planId: "pl_stream_001", 
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-12-01"),
    status: "expired",
    isParty: true,
    partyId: "party_002",
    currentMembers: 4,
    maxMembers: 4
  },
  {
    id: "sub_004",
    productId: "p_ai_002", // Claude Pro
    planId: "pl_ai_002",
    startDate: new Date("2024-11-10"),
    endDate: new Date("2025-08-25"), // 약 8개월 후
    status: "active",
    isParty: true,
    partyId: "party_003",
    currentMembers: 2,
    maxMembers: 4
  },
  {
    id: "sub_005",
    productId: "p_music_004", // YouTube Music (개인 구독)
    planId: "pl_music_004",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2025-05-01"), // 약 5개월 후
    status: "active",
    isParty: false,
    currentMembers: 1,
    maxMembers: 1
  },
  {
    id: "sub_006",
    productId: "p_ai_004", // Perplexity Pro (개인 구독)
    planId: "pl_ai_004",
    startDate: new Date("2024-10-20"),
    endDate: new Date("2025-07-20"), // 약 7개월 후
    status: "active",
    isParty: false,
    currentMembers: 1,
    maxMembers: 1
  }
];

// 구독 정보와 상품 정보를 조합하는 헬퍼 함수
export const getSubscriptionWithProduct = () => {
  return MockUserSubscriptions.map(subscription => {
    const product = MockProducts.find(p => p.id === subscription.productId);
    const plan = product?.plan.find(pl => pl.id === subscription.planId);
    
    return {
      ...subscription,
      product,
      plan
    };
  }).filter(item => item.product && item.plan);
};

// 구독하지 않은 상품들을 반환하는 헬퍼 함수
export const getUnsubscribedProducts = () => {
  const subscribedProductIds = MockUserSubscriptions
    .filter(sub => sub.status === "active")
    .map(sub => sub.productId);
  
  return MockProducts
    .filter(product => !subscribedProductIds.includes(product.id))
    .map(product => {
      // 각 상품의 첫 번째 플랜을 기본으로 사용
      const plan = product.plan[0];
      return {
        product,
        plan,
        // 임시 구독 정보 (구독하지 않은 상태)
        isSubscribed: false,
        isParty: true, // 대부분 파티로 설정
        currentMembers: Math.floor(Math.random() * 3) + 1, // 1-3명 랜덤
        maxMembers: 4
      };
    });
};
