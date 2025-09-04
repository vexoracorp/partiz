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
                  context: "account",
                  id: "account-joinParty",
                  product: subscription.product,
                  field: [
                    {
                      name: "아이디",
                      value: "minecraft1.25freedownload",
                      icon: "User",
                      secure: false,
                    },
                    {
                      name: "비밀번호",
                      value: "youchan-myyouchan1928ang!",
                      icon: "Lock",
                      secure: true,
                    },
                  ],
                  troubleSupportUrl: "",
                },
                {
                  context: "button",
                  id: "button-joinParty",
                  label: "계정 인증 조회하기",
                  name: "joinParty",
                  icon: "Mailbox",
                  actionTypeId: "joinParty",
                },
                {
                  context: "form",
                  id: "form-joinParty",
                  title: "본인 계정 적용 이메일",
                  product: subscription.product,
                  description: "계정 적용을 위해 아래 이메일을 입력해주세요",
                  field: [
                    {
                      name: "이메일",
                      placeholder: "이메일을 입력해주세요.",
                    },
                  ],
                  troubleSupportUrl: "https://www.google.com",
                  actionUrl: "https://www.google.com",
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
