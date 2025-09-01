import ContentItem from "@/components/content/content-item";
import contentData from "@/mock/content/index.ts";

import "@/components/content/content-item/styles.module.scss";
import s from "@/components/content/styles.module.scss";

export default function Content() {
  return (
    <div className={s.SectionContainer}>
      {contentData.map((item, idx) => (
        <ContentItem
          key={idx}
          title={item.title}
          imageUrl={item.imageUrl}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
