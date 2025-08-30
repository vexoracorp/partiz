import {
  getContrastDescriptionColor,
  getContrastTextColor,
} from "@/utils/colorUtils.ts";

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
  backgroundColor,
}: BannerItemProps) {
  const handleClick = () => {
    window.open(href, "_blank");
  };

  const bgColor = backgroundColor || "#19191C";
  const textColor = getContrastTextColor(bgColor);
  const descriptionColor = getContrastDescriptionColor(bgColor);

  return (
    <div
      className={s.container}
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
      <div className={s.textContainer}>
        <h2 className={s.title} style={{ color: textColor }}>
          {title}
        </h2>
        <p className={s.description} style={{ color: descriptionColor }}>
          {description}
        </p>
      </div>
      <div className={s.imageContainer}>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
}
