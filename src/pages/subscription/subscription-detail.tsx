import { useParams } from "react-router-dom";

import { MainLayout } from "@/components/layouts";
import { ProductHeader } from "@/components/product";
import { Header } from "@/components/ui";
import { getSubscriptionById } from "@/mock/subscription";

import s from "@/styles/pages/subscription/subscription-detail.module.scss";

export default function SubscriptionDetail() {
  const { id } = useParams();
  const subscription = getSubscriptionById(id);

  if (!subscription) {
    return <div>Subscription not found</div>;
  }

  return (
    <>
      <Header />
      <MainLayout>
        <div className={s.container}>
          <section className={s.titleSection}>
            <ProductHeader
              title={subscription.product?.name}
              tag={subscription.category.map((cat) => cat.toString())}
              image={subscription.image}
            />
          </section>
          <section className={s.accountSection}>a</section>
          <section className={s.productSection}>p</section>
        </div>
      </MainLayout>
    </>
  );
}
