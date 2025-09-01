import Banner from "@/components/home/banner";
import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";

const Home = () => {
  return (
    <>
      <Header />

      <MainLayout>
        <Banner />
      </MainLayout>
    </>
  );
};

export default Home;
