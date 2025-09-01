import Content from "@/components/content/recommend-list";
import Banner from "@/components/home/banner";
import { MainLayout } from "@/components/layouts";
import { ProductCard } from "@/components/product";
import { Header, HStack, Typo, VStack } from "@/components/ui";

const Home = () => {
  return (
    <>
      <Header />

      <MainLayout>
        <Banner />
        <VStack fullWidth gap={24}>
          <Typo.Display>바로 가입 가능한 파티</Typo.Display>
          <HStack fullWidth wrap gap={20}>
            <ProductCard
              id="1"
              name="ChatGPT Plus"
              image="/image/chatgpt.jpg"
              endDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 4120)}
              price={29200}
            />
            <ProductCard
              id="1"
              name="ChatGPT Plus"
              image="/image/chatgpt.jpg"
              endDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 4120)}
              price={29200}
            />
            <ProductCard
              id="1"
              name="ChatGPT Plus"
              image="/image/chatgpt.jpg"
              endDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 4120)}
              price={29200}
            />
            <ProductCard
              id="1"
              name="ChatGPT Plus"
              image="/image/chatgpt.jpg"
              endDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 4120)}
              price={29200}
            />
            <ProductCard
              id="1"
              name="ChatGPT Plus"
              image="/image/chatgpt.jpg"
              endDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 4120)}
              price={29200}
            />
          </HStack>
        </VStack>
        <Content />
      </MainLayout>
    </>
  );
};

export default Home;
