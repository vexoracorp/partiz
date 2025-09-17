import { useNavigate } from "react-router-dom";

import { MainLayout } from "@/components/layouts";
import { PartyCard } from "@/components/product";
import { Header, HStack, Spacing, Typo, VStack } from "@/components/ui";
import { useSubscriptions } from "@/hooks/subscription";

/**
 * Subscription page component that shows user's current subscriptions.
 */
export default function Subscription() {
  const navigate = useNavigate();

  const { data: subscriptions } = useSubscriptions();

  // 구독과 미구독 상품이 모두 없을 때 예외 처리
  if (subscriptions.length === 0) {
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
        <VStack fullWidth gap={24}>
          <Typo.Headline as="h2">내 구독</Typo.Headline>
          <HStack gap={24} wrap>
            {subscriptions.map((subscription) => {
              console.log("fuckas", subscription);
              return (
                <PartyCard
                  context="subscription"
                  key={subscription.id}
                  subscription={subscription}
                  onClick={() => navigate(`/subscription/${subscription.id}`)}
                />
              );
            })}
          </HStack>
        </VStack>
      </MainLayout>
    </>
  );
}
