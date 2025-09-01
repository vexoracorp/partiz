import { useNavigate, useParams } from "react-router-dom";

import Content from "@/components/content/recommend-list";
import { MainLayout } from "@/components/layouts";
import { PartyCard, ProductHeader } from "@/components/product";
import { Header, HStack, Spacing, Typo, VStack } from "@/components/ui";
import { MockParty } from "@/mock/party";

export default function Product() {
  const navigate = useNavigate();
  const { id } = useParams();

  const tag = ["AI", "OpenAI", "GPT", "OTT"];

  return (
    <>
      <Header />
      <Spacing size={25} />
      <MainLayout gap={42}>
        <ProductHeader
          title="ChatGPT Plus"
          partyCount={MockParty.length.toString()}
          tag={tag}
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
        <Spacing size={25} />
        {tag.includes("OTT") && <Content />}
      </MainLayout>
    </>
  );
}
