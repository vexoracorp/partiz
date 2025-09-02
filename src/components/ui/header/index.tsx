import { Home, LayoutGrid, ListVideo, ShoppingCart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//조성주 바보야 좀 성공하자
import { Button } from "@/components/ui";
import HeaderItem from "@/components/ui/header/header-item";

import s from "./styles.module.scss";
/**
 * Top navigation header with logo, primary actions, and page-aware navigation items.
 *
 * Renders the site logo (linking to "/"), three navigation items ("홈", "컨텐츠", "내 구독") whose active states are derived from the current router pathname, and a primary "로그인" button.
 */
export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <div className={s.right}>
          <Link to="/" className={s.logoLink}>
            <img
              className={s.logo}
              src="/partiz.svg"
              alt="logo"
              width="77"
              height="22"
            />
          </Link>
          <nav className={s.items} aria-label="주요 메뉴">
            <HeaderItem
              text={"홈"}
              icon={Home}
              href={"/"}
              isActive={pathname === "/"}
            />
            <HeaderItem
              text={"서비스"}
              icon={ShoppingCart}
              href={"/product-list"}
              isActive={pathname.startsWith("/product-list")}
            />
            <HeaderItem
              text={"컨텐츠"}
              icon={ListVideo}
              href={"/my-contents"}
              isActive={pathname.startsWith("/my-contents")}
            />
            <HeaderItem
              text={"내 구독"}
              icon={LayoutGrid}
              href={"/subscription"}
              isActive={pathname.startsWith("/subscription")}
            />
          </nav>
        </div>          
          <Button size="medium" variant="primary" onClick={() => navigate("/auth/login")}>
            로그인
          </Button>
      </div>
    </header>
  );
}