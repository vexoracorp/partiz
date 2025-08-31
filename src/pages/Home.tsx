import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";
import Banner from "@/components/home/banner";

const Home = () => {
  return (
    <>
      <Header />

      <MainLayout>
        <Banner />
        <p>나야 배너</p>
      </MainLayout>
    </>
  );
};

export default Home;
