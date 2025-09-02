import SignupModal from "@/components/auth/signup/signup-modal";
import AuthLayout from "@/components/layouts/auth";
import { Header } from "@/components/ui";

export default function Signup() {
  return (
    <>
      <Header />
      <AuthLayout>
        <SignupModal />
      </AuthLayout>
    </>
  );
}

