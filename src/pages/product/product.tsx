import { useNavigate, useParams } from "react-router-dom";

import { MainLayout } from "@/components/layouts";
import { PartyCard } from "@/components/party";
import ProductHeader from "@/components/product/product-header";
import { Header, HStack, Spacing, Typo, VStack } from "@/components/ui";
import { MockParty } from "@/mock/party";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <Header />
      <Spacing size={25} />
      <MainLayout gap={42}>
        <ProductHeader
          title="ChatGPT Plus"
          partyCount={MockParty.length.toString()}
          tag={["AI", "OpenAI", "GPT"]}
          image="/image/chatgpt.jpg"
        />

        <VStack fullWidth gap={24}>
          <Typo.Headline as="h2">ChatGPT Plus 파티</Typo.Headline>
          <HStack gap={24} wrap>
            {MockParty.map((party) => (
              <PartyCard
                key={party.id}
                party={party}
                onClick={() => navigate(`/product/${id}/party/${party.id}`)}
              />
            ))}
          </HStack>
        </VStack>
      </MainLayout>
    </>
  );
}
