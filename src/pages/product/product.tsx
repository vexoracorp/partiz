import { useNavigate, useParams } from "react-router-dom";

import { RecommendContent } from "@/components/content";
import { MainLayout } from "@/components/layouts";
import {
  PartyCard,
  ProductHeader,
  ProductQuestion,
} from "@/components/product";
import { Header, HStack, Spacing, Typo, VStack } from "@/components/ui";
import { useProduct } from "@/hooks/product";
import { isStreamingProduct } from "@/utils/category";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { product } = useProduct(id || "");

  if (!product) {
    return (
      <>
        <Header />
        <Spacing size={25} />
        <MainLayout gap={42}>
          <Typo.Headline>상품을 찾을 수 없습니다.</Typo.Headline>
        </MainLayout>
      </>
    );
  }

  return (
    <>
      <Header />

      <Spacing size={25} />
      <MainLayout gap={42}>
        <ProductHeader
          title={product.name}
          partyCount={product.plan.length}
          tag={product.category}
          image={product.image}
        />

        <VStack fullWidth gap={24}>
          <Typo.Headline as="h2">{product.name} 파티</Typo.Headline>
          <HStack gap={24} wrap>
            {product.plan.map((plan) => {
              return (
                <PartyCard
                  key={plan.id}
                  context="shopping"
                  product={product}
                  plan={plan}
                  onClick={() => navigate(`/product/${id}/party/${plan.id}`)}
                />
              );
            })}
          </HStack>
        </VStack>
        <Spacing size={25} />
        <ProductQuestion {...product} />
        {isStreamingProduct(product) && <RecommendContent />}
      </MainLayout>
    </>
  );
}
