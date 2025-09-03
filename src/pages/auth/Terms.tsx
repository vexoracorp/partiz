import TermsModal from "@/components/auth/terms/TermsModal";
import AuthLayout from "@/components/layouts/auth";
import { Header } from "@/components/ui";

export default function Terms() {
  return (
    <>
      <Header />
      <AuthLayout>
        <TermsModal />
      </AuthLayout>
    </>
  );
}
