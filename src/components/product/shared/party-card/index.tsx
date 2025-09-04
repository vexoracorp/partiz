import { type PartyCardProps } from "./party-card.type";
import { getPartyCardData } from "./party-card.util";
import {
  PartyCardButton,
  PartyCardHead,
  PartyCardInfo,
  PartyCardMember,
} from "./widgets";

import s from "./styles.module.scss";

export default function PartyCard(props: PartyCardProps) {
  const { product, member, endDate, isSubscribed, isParty } = getPartyCardData(props);

  return (
    <a className={s.container} onClick={props.onClick}>
      <PartyCardHead
        {...product}
        endDate={endDate}
        isSubscribed={isSubscribed}
      />
      <PartyCardMember {...member} />
      <PartyCardInfo
        endDate={endDate}
        membersLeft={member.left}
        isParty={isParty}
        isSubscribed={isSubscribed}
      />
      <PartyCardButton
        {...member}
        isParty={isParty}
        isSubscribed={isSubscribed}
        onClick={props.onClick}
      />
    </a>
  );
}
