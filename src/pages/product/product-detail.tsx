import { useParams } from "react-router-dom";

import { MainLayout } from "@/components/layouts";
import {
  PartyMembers,
  ProductDescription,
  ProductHeader,
  ProductInfo,
  RelatedProducts,
} from "@/components/product";
import { Button, Header, Spacing } from "@/components/ui";
import { MockProducts } from "@/mock/product";
import type { Product } from "@/types/product";

export default function ProductDetail() {
  const { id, partyId } = useParams<{ id: string; partyId: string }>();
  const product = MockProducts.find((p: Product) => p.id === id);
  const plan = partyId
    ? product?.plan.find((p) => p.id === partyId) || product?.plan[0]
    : product?.plan[0];

  if (!product || !plan) {
    return (
      <>
        <Header />
        <Spacing size={25} />
        <MainLayout gap={42} style={{ alignItems: "center" }}>
          <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>제품을 찾을 수 없습니다</h2>
            <p>요청하신 제품이 존재하지 않거나 삭제되었습니다.</p>
            <Button variant="primary" onClick={() => window.history.back()}>
              이전 페이지로 돌아가기
            </Button>
          </div>
        </MainLayout>
      </>
    );
  }

  return (
    <>
      <Header />
      <Spacing size={25} />
      <MainLayout gap={42} style={{ alignItems: "flex-start" }}>
        <ProductHeader
          title={product.name}
          tag={product.category.map((cat) => cat.toString())}
          image={product.bannerImage}
          rightContent={
            <Button variant="primary" size="large">
              파티 참가하기
            </Button>
          }
        />
        <ProductInfo plan={plan} />
        <PartyMembers plan={plan} />
        <ProductDescription description={plan.description} />
        <Spacing size={25} />
        <RelatedProducts product={product} name={product.name} />
      </MainLayout>
    </>
  );
}
