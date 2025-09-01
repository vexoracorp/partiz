import type { Product } from "@/types/product";
import { getMinPlanPrice } from "@/utils/product";

import s from "./styles.module.scss";

export default function Product(props: Product) {
  const { id, image, name, plan } = props;

  return (
    <a href={`/product/${id}`} className={s.container}>
      <img src={image} alt={name} />
      <div className={s.text_container}>
        <h3 className={s.title}>{name}</h3>
        <p className={s.price}>
          최저가 {getMinPlanPrice(plan).toLocaleString()}원
        </p>
      </div>
    </a>
  );
}
