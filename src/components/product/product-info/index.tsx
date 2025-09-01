import { Typo } from "@/components/ui";

import styles from "./styles.module.scss";

interface ProductInfoProps {
  cost: number;
  endDate: string;
  daysLeft: number;
}

export default function ProductInfo({
  cost,
  endDate,
  daysLeft,
}: ProductInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.infoItem}>
        <Typo.Subtext>참여 비용</Typo.Subtext>
        <Typo.Headline>{cost.toLocaleString()}원</Typo.Headline>
      </div>
      <div className={styles.infoItem}>
        <Typo.Subtext>종료일</Typo.Subtext>
        <Typo.Headline>
          {endDate} ({daysLeft}일)
        </Typo.Headline>
      </div>
    </div>
  );
}
