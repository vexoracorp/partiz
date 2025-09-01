import { MainLayout } from "@/components/layouts";
import PartyCard from "@/components/party/party-card";
import ProductHeader from "@/components/product/product-header";
import { Header, Spacing } from "@/components/ui";

export default function Product() {
  // 예시 파티 데이터
  const exampleParties = [
    {
      id: "1",
      title: "ChatGPT Plus",
      price: "월 15,000원",
      logoUrl: "/image/chatgpt.jpg",
      maxParticipants: 4,
      endDate: "2024년 12월 31일",
      status: "active" as const,
      participants: [
        { id: "1", nickname: "김철수", joinDate: "2024-01-15" },
        { id: "2", nickname: "이영희", joinDate: "2024-01-16" },
      ],
    },
    {
      id: "2",
      title: "ChatGPT Plus",
      price: "월 15,000원",
      logoUrl: "/image/chatgpt.jpg",
      maxParticipants: 4,
      endDate: "2024년 12월 31일",
      status: "full" as const,
      participants: [
        { id: "3", nickname: "박민수", joinDate: "2024-01-10" },
        { id: "4", nickname: "최지영", joinDate: "2024-01-12" },
        { id: "5", nickname: "정현우", joinDate: "2024-01-14" },
        { id: "6", nickname: "한소희", joinDate: "2024-01-15" },
      ],
    },
    {
      id: "3",
      title: "ChatGPT Plus",
      price: "월 15,000원",
      logoUrl: "/image/chatgpt.jpg",
      maxParticipants: 4,
      endDate: "2024년 12월 31일",
      status: "active" as const,
      participants: [{ id: "7", nickname: "강동원", joinDate: "2024-01-18" }],
    },
  ];

  const handlePartyClick = (partyId: string) => {
    console.log(`파티 ${partyId} 클릭됨`);
    // 여기에 파티 상세 페이지로 이동하는 로직 추가
  };

  return (
    <>
      <Header />
      <Spacing size={25} />
      <MainLayout>
        <ProductHeader
          title="ChatGPT Plus"
          partyCount="10"
          tag={["AI", "OpenAI", "GPT"]}
          image="/image/chatgpt.jpg"
        />

        {/* 파티 카드 섹션 */}
        <div style={{ padding: "0 20px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#151515",
            }}
          >
            참여 가능한 파티
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
              gap: "20px",
            }}
          >
            {exampleParties.map((party) => (
              <PartyCard
                key={party.id}
                party={party}
                onClick={() => handlePartyClick(party.id)}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
