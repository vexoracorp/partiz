import { useTranslation } from "react-i18next";

import { MainLayout } from "@/components/layouts";

const Home = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <p>{t("greeting", { name: 10 })}</p>
    </MainLayout>
  );
};

export default Home;
