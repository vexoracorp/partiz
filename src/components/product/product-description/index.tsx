import { Typo } from "@/components/ui";

import styles from "./styles.module.scss";

interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <div className={styles.container}>
      <Typo.BodyLarge>제품 설명</Typo.BodyLarge>
      <Typo.Body as={"p"} className={styles.descriptionText}>
        {description}
      </Typo.Body>
    </div>
  );
}
