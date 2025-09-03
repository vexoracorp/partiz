import { useNavigate } from "react-router-dom";

import { MainLayout } from "@/components/layouts";
import { PartyCard } from "@/components/product";
import { Header, HStack, Spacing, Typo, VStack } from "@/components/ui";
import {
  getSubscriptionWithProduct,
  getUnsubscribedProducts,
} from "@/mock/subscription";

/**
 * Subscription page component that shows user's current subscriptions.
 */
export default function Subscription() {
  const navigate = useNavigate();
  const subscriptions = getSubscriptionWithProduct();
  const activeSubscriptions = subscriptions.filter(
    (sub) => sub.status === "active",
  );
  const unsubscribedProducts = getUnsubscribedProducts();

  // 구독과 미구독 상품이 모두 없을 때 예외 처리
  if (activeSubscriptions.length === 0 && unsubscribedProducts.length === 0) {
    return (
      <>
        <Header />
        <Spacing size={25} />
        <MainLayout gap={42}>
          <Typo.Headline>표시할 상품이 없습니다.</Typo.Headline>
        </MainLayout>
      </>
    );
  }

  return (
    <>
      <Header />
      <Spacing size={25} />
      <MainLayout gap={42}>
        {/* 내 구독 섹션 */}
        {activeSubscriptions.length > 0 && (
          <VStack fullWidth gap={24}>
            <Typo.Headline as="h2">내 구독</Typo.Headline>
            <HStack gap={24} wrap>
              {activeSubscriptions.map((subscription) => {
                const currentMembers = subscription.currentMembers || 0;
                const maxMembers = subscription.maxMembers || 0;
                const membersLeft = Math.max(0, maxMembers - currentMembers);

                return (
                  <PartyCard
                    key={subscription.id}
                    productImage={subscription.product!.image}
                    productName={subscription.product!.name}
                    productPrice={subscription.plan!.price.toString()}
                    endDate={subscription.endDate}
                    membersLeft={membersLeft.toString()}
                    currentMembers={currentMembers}
                    maxMembers={maxMembers}
                    isParty={subscription.isParty}
                    isSubscribed={true}
                    onClick={() => {
                      if (subscription.isParty) {
                        navigate(
                          `/product/${subscription.productId}/party/${subscription.planId}`,
                        );
                      } else {
                        navigate(`/product/${subscription.productId}`);
                      }
                    }}
                  />
                );
              })}
            </HStack>
          </VStack>
        )}

        {/* 구독 가능한 상품 섹션
        {unsubscribedProducts.length > 0 && (
          <VStack fullWidth gap={24}>
            <Typo.Headline as="h2">구독 가능한 상품</Typo.Headline>
            <HStack gap={24} wrap>
              {unsubscribedProducts.map((item, index) => {
                const membersLeft = Math.max(0, item.maxMembers - item.currentMembers);
                
                return (
                  <PartyCard
                    key={`unsubscribed-${item.product.id}-${index}`}
                    productImage={item.product.image}
                    productName={item.product.name}
                    productPrice={item.plan.price.toString()}
                    endDate={item.plan.endDate}
                    membersLeft={membersLeft.toString()}
                    currentMembers={item.currentMembers}
                    maxMembers={item.maxMembers}
                    isParty={item.isParty}
                    isSubscribed={false}
                    onClick={() => {
                      if (item.isParty) {
                        navigate(`/product/${item.product.id}/party/${item.plan.id}`);
                      } else {
                        navigate(`/product/${item.product.id}`);
                      }
                    }}
                  />
                );
              })}
            </HStack>
          </VStack>
        )} */}
      </MainLayout>
    </>
  );
}
