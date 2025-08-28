import Image from "next/image";

import s from "./styles.module.scss";

export interface BannerItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function BannerItem({
  title,
  description,
  imageSrc,
  imageAlt,
}: BannerItemProps) {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{description}</p>
      </div>
      <Image
        className={s.image}
        src={imageSrc}
        alt={imageAlt}
        width={380}
        height={330}
      />
    </div>
  );
}
