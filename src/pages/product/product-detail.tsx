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
import { MockProductDetail } from "@/mock/product-detail";
import { MockRelatedProducts } from "@/mock/related-product";
import type { Participant, Product } from "@/types/product";

export default function ProductDetail() {
  // ChatGPT Plus 제품 데이터 가져오기
  const chatGptProduct = MockProducts.find(
    (product: Product) => product.id === "p_ai_001",
  );
  const plan = chatGptProduct?.plan[0];

  // 참여자 데이터를 PartyMembers 컴포넌트 형식에 맞게 변환
  const membersData: Array<{
    id: string;
    name: string;
    joinDate: string;
    isActive: boolean;
  }> = [];

  if (plan) {
    // 실제 참여자들
    plan.participants.forEach((participant: Participant) => {
      membersData.push({
        id: participant.id,
        name: participant.name,
        joinDate:
          participant.joinedAt
            .toLocaleDateString("ko-KR")
            .replace(/\. /g, ".") + " 참여",
        isActive: true,
      });
    });

    // 빈 슬롯들
    const remainingSlots = plan.maxParticipants - plan.participants.length;
    for (let i = 0; i < remainingSlots; i++) {
      membersData.push({
        id: `empty_${i}`,
        name: "",
        joinDate: "",
        isActive: false,
      });
    }
  }

  // 종료일까지 남은 일수 계산
  const calculateDaysLeft = (endDate: Date) => {
    const today = new Date();
    const timeDiff = endDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  return (
    <>
      <Header />
      <Spacing size={25} />
      <MainLayout gap={42} style={{ alignItems: "flex-start" }}>
        <ProductHeader
          title={chatGptProduct?.name || "ChatGPT Plus"}
          tag={["AI", "OpenAI", "GPT"]}
          image={chatGptProduct?.bannerImage || "/image/chatgpt.jpg"}
          rightContent={
            <Button variant="primary" size="large">
              파티 참가하기
            </Button>
          }
        />
        <ProductInfo
          cost={plan?.discountPrice || MockProductDetail.cost}
          endDate={
            plan?.endDate.toLocaleDateString("ko-KR").replace(/\. /g, ".") ||
            MockProductDetail.endDate
          }
          daysLeft={
            plan ? calculateDaysLeft(plan.endDate) : MockProductDetail.daysLeft
          }
        />

        <PartyMembers
          members={
            membersData.length > 0 ? membersData : MockProductDetail.members
          }
        />

        <ProductDescription description={MockProductDetail.description} />

        <Spacing size={25} />

        <RelatedProducts
          products={MockRelatedProducts}
          name={chatGptProduct?.name || "ChatGPT Plus"}
        />
      </MainLayout>
    </>
  );
}
