import { HStack, Typo, VStack } from "@/components/ui";

import s from "./style.module.scss";

interface Props {
  title: string;
  partyCount?: number;
  tag: string[];
  image: string;
  rightContent?: React.ReactNode;
}

export default function ProductHeader({
  title,
  partyCount,
  tag,
  image,
  rightContent,
}: Props) {
  return (
    <HStack className={s.container}>
      <HStack className={s.left}>
        <img src={image} alt={title} className={s.image} />
        <VStack className={s.content}>
          <Typo.Headline as="h1">{title}</Typo.Headline>
          <Typo.Body as="p">
            {partyCount && `파티 ${partyCount}개`}
            {partyCount && tag.length > 0 && " · "}
            {tag.map((t) => `#${t}`).join(", ")}
          </Typo.Body>
        </VStack>
      </HStack>
      {rightContent}
    </HStack>
  );
}
