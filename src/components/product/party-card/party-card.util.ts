import type {
  BasePartyCardProductInfo,
  CardVariant,
  PartyCardProps,
} from "./party-card.type";

/**
 * 파티 카드의 상품 정보를 가져옵니다.
 * 쇼핑 컨텍스트와 구독 컨텍스트에 따라 다른 데이터 소스에서 정보를 추출합니다.
 *
 * @param props - 파티 카드의 props 객체
 * @returns 상품의 기본 정보 (id, name, image, price)
 */
export function getProductInfo(
  props: PartyCardProps,
): BasePartyCardProductInfo {
  if (props.context === "shopping") {
    return {
      ...props.product,
      price: props.plan.price,
    };
  }

  return {
    id: props.subscription.product.id,
    name: props.subscription.product.name,
    image: props.subscription.product.image,
    price: props.subscription.plan.price,
  };
}

/**
 * 파티 카드의 멤버 정보를 가져옵니다.
 * 현재 참여자 수, 최대 참여자 수, 남은 자리 수를 계산합니다.
 *
 * @param props - 파티 카드의 props 객체
 * @returns 멤버 정보 객체 (current: 현재 참여자 수, max: 최대 참여자 수, left: 남은 자리 수)
 */
export function getMemberInfo(props: PartyCardProps) {
  if (props.context === "shopping") {
    const current = props.plan.participants.length;
    const max = props.plan.maxParticipants;
    return {
      current,
      max,
      left: Math.max(0, max - current),
    };
  }

  const current = props.subscription.plan.participants.length;
  const max = props.subscription.plan.maxParticipants;
  return {
    current,
    max,
    left: Math.max(0, max - current),
  };
}

/**
 * 파티 카드의 변형 타입을 결정합니다.
 * 최대 참여자 수에 따라 'party' 또는 'individual' 타입을 반환합니다.
 *
 * @param props - 파티 카드의 props 객체
 * @returns 카드 변형 타입 ('party' | 'individual')
 */
export function getCardVariant(props: PartyCardProps): CardVariant {
  if (props.context === "shopping") {
    return props.plan.maxParticipants > 1 ? "party" : "individual";
  }
  return props.subscription.plan.maxParticipants > 1 ? "party" : "individual";
}

/**
 * 파티 카드의 종료 날짜를 가져옵니다.
 * 컨텍스트에 따라 다른 데이터 소스에서 종료 날짜를 추출합니다.
 *
 * @param props - 파티 카드의 props 객체
 * @returns 구독/플랜의 종료 날짜
 */
export function getEndDate(props: PartyCardProps) {
  if (props.context === "shopping") {
    return props.plan.endDate;
  }
  return props.subscription.endDate;
}

/**
 * 현재 사용자가 해당 상품을 구독 중인지 확인합니다.
 *
 * @param props - 파티 카드의 props 객체
 * @returns 구독 중이면 true, 아니면 false
 */
export function checkSubscribed(props: PartyCardProps): boolean {
  return props.context === "subscription";
}
