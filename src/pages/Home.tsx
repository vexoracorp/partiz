import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";
import Banner from "@/components/home/banner";

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
