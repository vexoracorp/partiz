import { MainLayout } from "@/components/layouts";
import { Header, Typo, VStack } from "@/components/ui";

/**
 * Page component that renders the header and main layout for the "MyContent" page.
 *
 * Renders a Header followed by MainLayout containing a temporary message about content updates.
 */
export default function Content() {
  return (
    <>
      <Header />
      <MainLayout>
        <VStack fullWidth gap={40} style={{ alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
          <Typo.Headline>🚧 컨텐츠 페이지</Typo.Headline>
          <VStack gap={16} style={{ textAlign: "center" }}>
            <Typo.Body>컨텐츠 추천 및 관리 기능은</Typo.Body>
            <Typo.Body>현재 개발 중입니다.</Typo.Body>
            <Typo.Caption style={{ marginTop: 20, color: "#666" }}>
              곧 다양한 컨텐츠 추천 서비스를 만나보실 수 있습니다!
            </Typo.Caption>
          </VStack>
        </VStack>
      </MainLayout>
    </>
  );
}
