import { ProductSection } from "@/components/home";
import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";

import "@/styles/pages/ProductList.scss";

export default function ProductList() {
  return (
    <>
      <Header />
      <MainLayout>
        <ProductSection />
      </MainLayout>
    </>
  );
}
