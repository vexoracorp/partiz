import { useParams } from "react-router-dom";

import { MainLayout } from "@/components/layouts";
import {
  AccountFormBuilder,
  PartyMembers,
  ProductDescription,
  ProductHeader,
} from "@/components/product";
import { Header, Spacing } from "@/components/ui";
import { useSubscription } from "@/hooks/subscription/useSubscription";
import { PlanType } from "@/types/product";

import s from "@/styles/pages/subscription/subscription-detail.module.scss";

export default function SubscriptionDetail() {
  const { id } = useParams();
  const { data: subscription } = useSubscription(id || "");

  if (!subscription) {
    return <div>Subscription not found</div>;
  }

  return (
    <>
      <Header />
      <Spacing size={25} />
      <MainLayout>
        <div className={s.container}>
          <section className={s.titleSection}>
            <ProductHeader
              title={subscription.product.name}
              image={subscription.product.image}
              endDate={subscription.endDate}
            />
          </section>
          <section className={s.accountSection}>
            <AccountFormBuilder
              form={[
                {
                  context: "button",
                  label: "계정 인증 조회하기",
                  name: "joinParty",
                  icon: "Mailbox",
                  actionTypeId: "joinParty",
                },
              ]}
            />
          </section>
          <section className={s.productSection}>
            <ProductDescription description={subscription.plan.description} />
            {subscription.plan.type === PlanType.PARTY && (
              <PartyMembers plan={subscription.plan} />
            )}
          </section>
        </div>
      </MainLayout>
    </>
  );
}
