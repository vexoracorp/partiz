import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";

export default function MyContent() {
  return (
    <>
      <Header />
      <MainLayout>
        <p>나야 my-contents</p>
      </MainLayout>
    </>
  );
}
