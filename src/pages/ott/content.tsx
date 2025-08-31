import { MainLayout } from "@/components/layouts";
import { Header } from "@/components/ui";

/**
 * Page component that renders the header and main layout for the "MyContent" page.
 *
 * Renders a Header followed by MainLayout containing a paragraph with the text "나야 my-contents".
 */
export default function Content() {
  return (
    <>
      <Header />
      <MainLayout>
        <p>나야 my-contents</p>
      </MainLayout>
    </>
  );
}
