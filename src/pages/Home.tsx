import { useTranslation } from "react-i18next";

import { MainLayout } from "@/components/layouts";
import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import Modal from "@/components/ui/modal";
import Spacing from "@/components/ui/spacing";

const Home = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <p>{t("greeting", { name: 10 })}</p>
      <Spacing size={16} />
      <Button variant="secondary">Click me</Button>
      <Checkbox label="Checkbox" />
      <Modal
        open={true}
        onOpenChange={() => {}}
        title="Modal"
        header={<div>Header</div>}
      >
        <p>Modal</p>
      </Modal>
    </MainLayout>
  );
};

export default Home;
