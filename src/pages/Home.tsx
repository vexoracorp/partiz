import { useTranslation } from "react-i18next";

import { MainLayout } from "@/components/layouts";
import Button from "@/components/ui/button";
import Spacing from "@/components/ui/spacing";

const Home = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <p>{t("greeting", { name: 10 })}</p>
      <Spacing size={16} />
      <Button variant="secondary">Click me</Button>
    </MainLayout>
  );
};

export default Home;
