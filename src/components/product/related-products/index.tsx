import { HStack, Typo } from "@/components/ui";
import { MockProducts } from "@/mock/product";
import type { Product } from "@/types/product";

import styles from "./styles.module.scss";

interface RelatedProductsProps {
  product: Product;
  name: string;
}

export default function RelatedProducts({
  product,
  name,
}: RelatedProductsProps) {
  // 관련 상품 로직: 우선순위별로 추천
  const getRelatedProducts = () => {
    const otherProducts = MockProducts.filter((p) => p.id !== product.id);

    // 1순위: 같은 카테고리 제품
    const sameCategoryProducts = otherProducts.filter((p) =>
      p.category.some((cat) => product.category.includes(cat)),
    );

    // 2순위: 인기 제품
    const popularProducts = otherProducts.filter((p) => p.popularProduct);

    // 3순위: 많이 사용되는 제품
    const mostUsedProducts = otherProducts.filter((p) => p.mostUsedProduct);

    // 중복 제거하면서 우선순위별로 합치기
    const relatedSet = new Set<Product>();

    [...sameCategoryProducts, ...popularProducts, ...mostUsedProducts].forEach(
      (p) => {
        if (relatedSet.size < 4) {
          relatedSet.add(p);
        }
      },
    );

    return Array.from(relatedSet);
  };

  const relatedProducts = getRelatedProducts();

  return (
    <div className={styles.container}>
      <Typo.Headline className={styles.title}>
        {name} 구매자가 함께 본 상품
      </Typo.Headline>
      <HStack gap={16} wrap>
        {relatedProducts.map((relatedProduct) => (
          <a
            href={`/product/${relatedProduct.id}`}
            className={styles.productCardContainer}
          >
            <div key={relatedProduct.id} className={styles.productCard}>
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                className={styles.productImage}
              />
              <Typo.BodyLarge>{relatedProduct.name}</Typo.BodyLarge>
            </div>
          </a>
        ))}
      </HStack>
    </div>
  );
}
