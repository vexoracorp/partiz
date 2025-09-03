import { useNavigate, useParams } from "react-router-dom";

import Content from "@/components/content/recommend-list";
import { MainLayout } from "@/components/layouts";
import {
  PartyCard,
  ProductHeader,
  ProductQuestion,
} from "@/components/product";
import { Header, HStack, Spacing, Typo, VStack } from "@/components/ui";
import { MockParty } from "@/mock/party";
import { MockProducts } from "@/mock/product";
import { isStreamingProduct } from "@/utils/category";
import { findProductById } from "@/utils/product";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();

  // URL 파라미터로 실제 상품 찾기
  const product = findProductById(MockProducts, id || "");

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
          partyCount={MockParty.length.toString()}
          tag={product.category}
          image={product.image}
        />

        <VStack fullWidth gap={24}>
          <Typo.Headline as="h2">{product.name} 파티</Typo.Headline>
          <HStack gap={24} wrap>
                        {product.plan.map((plan) => {
              const isPartyPlan = plan.maxParticipants > 1;
              return (
                <PartyCard
                  key={plan.id}
                  productImage={product.image}
                  productName={product.name}
                  productPrice={plan.price.toString()}
                  endDate={plan.endDate}
                  membersLeft={(plan.maxParticipants - plan.participants.length).toString()}
                  currentMembers={plan.participants.length}
                  maxMembers={plan.maxParticipants}
                  isParty={isPartyPlan}
                  isSubscribed={false}
                  onClick={() => {
                    if (isPartyPlan) {
                      navigate(`/product/${id}/party/${plan.id}`);
                    } else {
                      navigate(`/product/${id}`);
                    }
                  }}
                />
              );
            })}
          </HStack>
        </VStack>
        <Spacing size={25} />
        <ProductQuestion {...product} />
        {isStreamingProduct(product) && <Content />}
      </MainLayout>
    </>
  );
}
