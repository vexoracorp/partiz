import { Typo } from "@/components/ui";
import { getRemainingDays } from "@/utils/date";

import type { BasePartyCardProductInfo } from "../../party-card.type";

import s from "./styles.module.scss";

interface Props extends BasePartyCardProductInfo {
  endDate: Date;
  isSubscribed: boolean;
}

export default function PartyCardHead({
  image,
  name,
  price,
  endDate,
  isSubscribed,
}: Props) {
  const remainingDays = getRemainingDays(endDate);

  return (
    <div className={s.container}>
      <div className={s.product_id}>
        <img src={image} alt={name} width={26} height={26} />
        <Typo.BodyLarge>{name}</Typo.BodyLarge>
      </div>
      <div className={s.product_info}>
        {isSubscribed ? (
          <Typo.BodyLarge>{remainingDays}일 남음</Typo.BodyLarge>
        ) : (
          <Typo.BodyLarge>{price.toLocaleString()}원</Typo.BodyLarge>
        )}
      </div>
    </div>
  );
}
