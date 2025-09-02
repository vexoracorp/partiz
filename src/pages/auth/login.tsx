import LoginModal from "@/components/auth/login/login-modal";
import AuthLayout from "@/components/layouts/auth";
import { Header } from "@/components/ui";

export default function Login() {
  return (
    <>
      <Header />
      <AuthLayout>
        <LoginModal />
      </AuthLayout>
    </>
  );
}
