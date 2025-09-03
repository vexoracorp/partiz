import { ProductSection } from "@/components/home";
import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";

export default function Service() {
  return (
    <>
      <Header />
      <MainLayout>
        <ProductSection />
      </MainLayout>
    </>
  );
}