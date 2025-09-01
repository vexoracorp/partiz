import { ProductSection } from "@/components/home";
import Banner from "@/components/home/banner";
import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";

const Home = () => {
  return (
    <>
      <Header />

      <MainLayout>
        <Banner />
        <ProductSection />
        <p>나야 배너</p>
      </MainLayout>
    </>
  );
};

export default Home;
