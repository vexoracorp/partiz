import { Button } from "@/components/ui";

import type { PartyCardMemberInfo } from "../../party-card.type";

interface Props extends PartyCardMemberInfo {
  isParty: boolean;
  isSubscribed: boolean;
  onClick?: () => void;
}

export default function PartyCardCTA({
  isParty,
  isSubscribed,
  left,
  onClick,
}: Props) {
  if (isSubscribed) {
    return (
      <Button size="medium" variant="tertiary" fullWidth onClick={onClick}>
        구독관리
      </Button>
    );
  }

  if (left === 0) {
    return (
      <Button size="medium" variant="tertiary" fullWidth onClick={onClick}>
        마감된 파티
      </Button>
    );
  }

  return (
    <Button size="medium" variant="primary" fullWidth onClick={onClick}>
      {isParty ? "파티 참가하기" : "구독하기"}
    </Button>
  );
}
