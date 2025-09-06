export interface PromotionCode {
  code: string;
  discount: number;
  description: string;
  isActive: boolean;
}

export const promotionCodes: PromotionCode[] = [
  {
    code: "0ACSAJ2MD",
    discount: 3000,
    description: "신규가입 특별할인",
    isActive: true,
  },
  {
    code: "WELCOME2024",
    discount: 5000,
    description: "웰컴 할인",
    isActive: true,
  },
  {
    code: "PARTIZ50",
    discount: 2500,
    description: "파티즈 응원 할인",
    isActive: true,
  },
  {
    code: "SPRING30",
    discount: 4000,
    description: "봄맞이 할인",
    isActive: true,
  },
  {
    code: "FIRSTTIME",
    discount: 1500,
    description: "첫 구매 할인",
    isActive: true,
  },
  {
    code: "EXPIRED123",
    discount: 2000,
    description: "만료된 코드",
    isActive: false,
  },
];

// 프로모션 코드 검증 함수
export const validatePromotionCode = (code: string): PromotionCode | null => {
  const foundCode = promotionCodes.find(
    (promo) => promo.code.toLowerCase() === code.toLowerCase() && promo.isActive
  );
  return foundCode || null;
};
