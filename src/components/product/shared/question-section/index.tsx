import { CircleQuestionMark } from "lucide-react";

import { FlexJustify, HStack, Typo, VStack } from "@/components/ui";
import type { Product } from "@/types/product";

import styles from "./style.module.scss";

export default function ProductQuestionSection(props: Product) {
  const { serviceName, question, image } = props;

  return (
    <HStack fullWidth justify={FlexJustify.Between}>
      <VStack gap={12}>
        <HStack gap={12}>
          <img src={image} alt={serviceName} className={styles.questionIcon} />
          <div className={styles.questionIcon}>
            <CircleQuestionMark size={24} />
          </div>
        </HStack>
        <Typo.Headline>{serviceName}는 무엇인가요?</Typo.Headline>
        <Typo.Body>{question.description}</Typo.Body>
      </VStack>
      <HStack gap={12}>
        {question.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={serviceName}
            className={styles.image}
          />
        ))}
      </HStack>
    </HStack>
  );
}
