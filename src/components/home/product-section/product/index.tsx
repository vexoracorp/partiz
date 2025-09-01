import s from "./styles.module.scss";

export interface ProductProps {
  title: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
}

export default function Product({
  title,
  price,
  imageUrl,
  imageAlt,
}: ProductProps) {
  return (
    <div className={s.container}>
      <img src={imageUrl} alt={imageAlt} />
      <div className={s.text_container}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.price}>{price}</p>
      </div>
    </div>
  );
}
