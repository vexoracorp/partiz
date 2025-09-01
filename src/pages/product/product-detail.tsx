import { MainLayout } from "@/components/layouts";
import ProductHeader from "@/components/product/product-header";
import { Header } from "@/components/ui";

export default function ProductDetail() {
  return (
    <>
      <Header />
      <MainLayout gap={42}>
        <ProductHeader
          title="ChatGPT Plus"
          tag={["AI", "OpenAI", "GPT"]}
          image="/image/chatgpt.jpg"
        />
      </MainLayout>
    </>
  );
}
