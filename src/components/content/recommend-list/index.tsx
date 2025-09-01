import contentData from "@/mock/content/index.ts";

import { Typo, VStack } from "../../ui";

import ContentItem from "./content-item";

import s from "./styles.module.scss";

export default function Content() {
  return (
    <VStack className={s.container}>
      <Typo.Display>파티즈 추천 컨텐츠</Typo.Display>
      <div className={s.sectionContainer}>
        {contentData.map((item, idx) => (
          <ContentItem
            key={idx}
            title={item.title}
            imageUrl={item.imageUrl}
            rating={item.rating}
            href={`/contents/${item.id}`}
          />
        ))}
      </div>
    </VStack>
  );
}
