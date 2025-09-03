import { Typo } from "@/components/ui";
import type { Plan } from "@/types/product";

import styles from "./styles.module.scss";

interface ProductInfoProps {
  plan: Plan;
}

export default function ProductInfo({ plan }: ProductInfoProps) {
  const daysLeft = Math.ceil(
    (plan.endDate.getTime() - Date.now()) / (1000 * 3600 * 24),
  );
  const endDate = plan.endDate.toLocaleDateString("ko-KR").replace(/\. /g, ".");

  return (
    <div className={styles.container}>
      <div className={styles.infoItem}>
        <Typo.Subtext>참여 비용</Typo.Subtext>
        <Typo.Headline>{plan.price.toLocaleString()}원</Typo.Headline>
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
