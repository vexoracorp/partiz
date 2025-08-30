import s from "./styles.module.scss";

export interface BannerItemProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  backgroundColor?: string;
}

export default function BannerItem({
  title,
  description,
  imageUrl,
  imageAlt,
  href,
}: BannerItemProps) {
  const handleClick = () => {
    window.open(href, "_blank");
  };
  return (
    <div className={s.container} onClick={handleClick}>
      <div className={s.textContainer}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.imageContainer}>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
}
