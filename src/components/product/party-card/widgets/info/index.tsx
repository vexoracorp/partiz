import { Typo } from "@/components/ui";
import { formatKoreanDate, getPartyEndDateText } from "@/utils/date";

import s from "./styles.module.scss";

interface Props {
  endDate: Date;
  membersLeft: number;
  isParty: boolean;
  isSubscribed: boolean;
}

export default function PartyCardInfo({
  endDate,
  membersLeft,
  isParty,
  isSubscribed,
}: Props) {
  const dateText = isSubscribed
    ? `${formatKoreanDate(endDate)}까지` // 구독중: 2025.9.31까지
    : getPartyEndDateText(endDate); // 비구독: 2025.9.31까지(30일)

  return (
    <div className={s.subscription}>
      <Typo.Subtext>{dateText}</Typo.Subtext>
      {isParty ? (
        isSubscribed ? (
          <Typo.Subtext>계정공유</Typo.Subtext>
        ) : (
          <Typo.Subtext>{membersLeft}자리 남음</Typo.Subtext>
        )
      ) : (
        <Typo.Subtext>개인 계정 적용</Typo.Subtext>
      )}
    </div>
  );
}
