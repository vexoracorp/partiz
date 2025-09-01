import { HStack, Typo } from "@/components/ui";

import styles from "./styles.module.scss";

interface RelatedProduct {
  id: string;
  name: string;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
  name: string;
}

export default function RelatedProducts({
  products,
  name,
}: RelatedProductsProps) {
  return (
    <div className={styles.container}>
      <Typo.Headline className={styles.title}>
        {name} 구매자가 함께 본 상품
      </Typo.Headline>
      <HStack gap={16} wrap>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <Typo.BodyLarge>{product.name}</Typo.BodyLarge>
          </div>
        ))}
      </HStack>
    </div>
  );
}
