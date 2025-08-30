import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";

/**
 * Subscription page component that renders the header and main layout.
 *
 * Renders a Header followed by MainLayout containing the paragraph "나야 Subscription".
 *
 * @returns The page's JSX element.
 */
export default function Subscription() {
  return (
    <>
      <Header />
      <MainLayout>
        <p>나야 Subscription</p>
      </MainLayout>
    </>
  );
}
