import Content from "@/components/content/recommend-list";
import Banner from "@/components/home/banner";
import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";

const Home = () => {
  return (
    <>
      <Header />

      <MainLayout>
        <Banner />
        <Content />
      </MainLayout>
    </>
  );
};

export default Home;
