import { Home, LayoutGrid, ListVideo } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui";
import HeaderItem from "@/components/ui/header/header-item";

import s from "./styles.module.scss";
export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <div className={s.right}>
          <Link to="/" className={s.logoLink}>
            <img
              className={s.logo}
              src="/partiz.svg"
              alt="logo"
              width="94"
              height="26"
            />
          </Link>
          <div className={s.items}>
            <HeaderItem
              text={"홈"}
              icon={Home}
              href_link={"/"}
              isActive={pathname === "/"}
            />
            <HeaderItem
              text={"컨텐츠"}
              icon={ListVideo}
              href_link={"/my-contents"}
              isActive={pathname.startsWith("/my-contents")}
            />
            <HeaderItem
              text={"내 구독"}
              icon={LayoutGrid}
              href_link={"/subscription"}
              isActive={pathname.startsWith("/subscription")}
            />
          </div>
        </div>
        <Button size="medium" variant="primary">
          로그인
        </Button>
      </div>
    </header>
  );
}
