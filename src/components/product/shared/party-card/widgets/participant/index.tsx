import PartyAvatar from "@/components/product/shared/party-avatar";

import type { PartyCardMemberInfo } from "../../party-card.type";

import s from "./styles.module.scss";

export default function PartyCardParticipant({
  current,
  max,
}: PartyCardMemberInfo) {
  return (
    <div className={s.container}>
      <div className={s.member}>
        {Array.from({ length: max }, (_, i) => (
          <PartyAvatar key={i} size="md" disabled={i >= current} />
        ))}
      </div>
    </div>
  );
}
