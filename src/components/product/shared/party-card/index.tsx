import { type PartyCardProps } from "./party-card.type";
import {
  checkSubscribed,
  getCardVariant,
  getEndDate,
  getMemberInfo,
  getProductInfo,
} from "./party-card.util";
import {
  PartyCardButton,
  PartyCardHead,
  PartyCardInfo,
  PartyCardMember,
} from "./widgets";

import s from "./styles.module.scss";

export default function PartyCard(props: PartyCardProps) {
  const product = getProductInfo(props);
  const member = getMemberInfo(props);
  const endDate = getEndDate(props);
  const isSubscribed = checkSubscribed(props);
  const isParty = getCardVariant(props) === "party";

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
