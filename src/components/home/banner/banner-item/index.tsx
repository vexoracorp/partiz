import {
  getContrastDescriptionColor,
  getContrastTextColor,
} from "@/utils/colorUtils";

import s from "./styles.module.scss";
import { Typo } from "@/components/ui";

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
  const bgColor = backgroundColor || "#19191C";
  const textColor = getContrastTextColor(bgColor);
  const descriptionColor = getContrastDescriptionColor(bgColor);

  return (
    <a href={href} rel="noopener noreferrer" className={s.container} style={{ backgroundColor: bgColor }}>
      <div className={s.textContainer}>
        <Typo.Headline as="h2" className={s.title} style={{ color: textColor }}>
          {title}
        </Typo.Headline>
        <Typo.Body as="p" className={s.description} style={{ color: descriptionColor }}>
          {description}
        </Typo.Body>
      </div>
      <div className={s.imageContainer}>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </a>
  );
}
