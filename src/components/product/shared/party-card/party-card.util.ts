import type {
  BasePartyCardProductInfo,
  PartyCardProps,
} from "./party-card.type";

/**
 * 파티 카드에 필요한 모든 데이터를 한 번에 추출합니다.
 * 
 * @param props - 파티 카드의 props 객체
 * @returns 카드 렌더링에 필요한 모든 데이터
 */
export function getPartyCardData(props: PartyCardProps) {
  if (props.context === "shopping") {
    const current = props.plan?.participants?.length || 0;
    const max = props.plan?.maxParticipants || 0;
    
    return {
      product: {
        ...props.product,
        price: props.plan?.price || 0,
      } as BasePartyCardProductInfo,
      member: {
        current,
        max,
        left: Math.max(0, max - current),
      },
      endDate: props.plan?.endDate,
      isSubscribed: false,
      isParty: max > 1,
    };
  }

  const current = props.subscription?.plan?.participants?.length || 0;
  const max = props.subscription?.plan?.maxParticipants || 0;
  
  return {
    product: {
      id: props.subscription?.product?.id || "",
      name: props.subscription?.product?.name || "",
      image: props.subscription?.product?.image || "",
      price: props.subscription?.plan?.price || 0,
    } as BasePartyCardProductInfo,
    member: {
      current,
      max,
      left: Math.max(0, max - current),
    },
    endDate: props.subscription?.endDate,
    isSubscribed: true,
    isParty: max > 1,
  };
}
