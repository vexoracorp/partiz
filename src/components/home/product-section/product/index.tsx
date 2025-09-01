import { Typo, VStack } from "@/components/ui";
import type { Product } from "@/types/product";
import { getMinPlanPrice } from "@/utils/product";

import s from "./styles.module.scss";

export default function Product(props: Product) {
  const { id, image, name, plan } = props;

  return (
    <a href={`/product/${id}`} className={s.container}>
      <img src={image} alt={name} />
      <VStack gap={8} className={s.text_container}>
        <Typo.BodyLarge className={s.title}>{name}</Typo.BodyLarge>
        <Typo.Subtext className={s.price}>
          최저가 <b>{getMinPlanPrice(plan).toLocaleString()}원</b>
        </Typo.Subtext>
      </VStack>
    </a>
  );
}
