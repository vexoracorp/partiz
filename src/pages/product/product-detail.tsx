import { MainLayout } from "@/components/layouts";
import {
  PartyMembers,
  ProductDescription,
  ProductHeader,
  ProductInfo,
  RelatedProducts,
} from "@/components/product";
import { Button, Header, Spacing } from "@/components/ui";
import { MockProductDetail } from "@/mock/product-detail";
import { MockRelatedProducts } from "@/mock/related-product";

export default function ProductDetail() {
  return (
    <>
      <Header />
      <Spacing size={25} />
      <MainLayout gap={42} style={{ alignItems: "flex-start" }}>
        <ProductHeader
          title="ChatGPT Plus"
          tag={["AI", "OpenAI", "GPT"]}
          image="/image/chatgpt.jpg"
          rightContent={
            <Button variant="primary" size="large">
              파티 참가하기
            </Button>
          }
        />
        <ProductInfo
          cost={MockProductDetail.cost}
          endDate={MockProductDetail.endDate}
          daysLeft={MockProductDetail.daysLeft}
        />

        <PartyMembers members={MockProductDetail.members} />

        <ProductDescription description={MockProductDetail.description} />

        <Spacing size={25} />

        <RelatedProducts products={MockRelatedProducts} name="ChatGPT Plus" />
      </MainLayout>
    </>
  );
}
