import { HStack, Typo, VStack } from "@/components/ui";
import { formatKoreanDate } from "@/utils/date";

import s from "./style.module.scss";

interface Props {
  title: string;
  partyCount?: number;
  tag?: string[];
  image: string;
  rightContent?: React.ReactNode;
  endDate?: Date;
}

export default function ProductHeader({
  title,
  partyCount,
  tag,
  image,
  rightContent,
  endDate,
}: Props) {
  return (
    <HStack className={s.container}>
      <HStack className={s.left}>
        <img src={image} alt={title} className={s.image} />
        <VStack className={s.content}>
          {endDate && (
            <Typo.Body as="p">{formatKoreanDate(endDate)}까지</Typo.Body>
          )}
          <Typo.Headline as="h1">{title}</Typo.Headline>
          <Typo.Body as="p">
            {partyCount && `파티 ${partyCount}개`}
            {partyCount && tag && tag.length > 0 && " · "}
            {tag && tag.map((t) => `#${t}`).join(", ")}
          </Typo.Body>
        </VStack>
      </HStack>
      {rightContent}
    </HStack>
  );
}
