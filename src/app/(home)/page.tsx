import Banner from "@/components/ui/banner";
import Header from "@/components/ui/header";

import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.main}>
      <Header />
      <Banner />
    </main>
  );
}
