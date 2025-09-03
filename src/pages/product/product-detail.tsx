import { useState } from "react";
import { useParams } from "react-router-dom";

import { MainLayout } from "@/components/layouts";
import {
  PartyMembers,
  PaymentModal,
  ProductDescription,
  ProductHeader,
  ProductInfo,
  RelatedProducts,
} from "@/components/product";
import { Button, Header, Modal, Spacing } from "@/components/ui";
import { useProductParty } from "@/hooks/product";

export default function ProductDetail() {
  const { id, partyId } = useParams<{ id: string; partyId: string }>();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data } = useProductParty(id || "", partyId || "");

  if (!data) {
    return (
      <>
        <Header />
        <Spacing size={25} />
        <MainLayout gap={42} style={{ alignItems: "center" }}>
          <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>제품을 찾을 수 없습니다</h2>
            <p>요청하신 제품이 존재하지 않거나 삭제되었습니다.</p>
            <Button variant="primary" onClick={() => window.history.back()}>
              눌러서 이전 페이지로 돌아가기
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
          title={data.product.name}
          tag={data.product.category}
          image={data.product.image}
          rightContent={
            <Button
              variant="primary"
              size="large"
              onClick={() => setIsDialogOpen(true)}
            >
              파티 참가하기
            </Button>
          }
        />
        <ProductInfo plan={data.party} />
        <PartyMembers plan={data.party} />
        <ProductDescription description={data.party.description} />
        <Spacing size={25} />
        <RelatedProducts product={data.product} name={data.product.name} />
      </MainLayout>

      <Modal
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="구독하기"
        size="md"
      >
        <PaymentModal
          product={data.product}
          plan={data.party}
          onClose={() => setIsDialogOpen(false)}
        />
      </Modal>
    </>
  );
}
