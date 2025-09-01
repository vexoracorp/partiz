import { FlexAlign, HStack, Typo, VStack } from "@/components/ui";

import s from "./styles.module.scss";

export interface ContentItemProps {
  title: string;
  imageUrl: string;
  rating: string;
  href: string;
}

export default function ContentItem({
  title,
  imageUrl,
  rating,
  href,
}: ContentItemProps) {
  return (
    <a href={href} className={s.contentItem}>
      <img src={imageUrl} className={s.image} alt={title} />
      <VStack>
        <Typo.Body className={s.title}>{title}</Typo.Body>
        <HStack align={FlexAlign.Center} gap={4}>
          <img src="/star.svg" alt="Rating" />{" "}
          <Typo.Subtext className={s.rating}>{rating}</Typo.Subtext>
        </HStack>
      </VStack>
    </a>
  );
}
