import { Home, LayoutGrid, ListVideo, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui";
import HeaderItem from "@/components/ui/header/header-item";

import s from "./styles.module.scss";
/**
 * Top navigation header with logo, primary actions, and page-aware navigation items.
 *
 * Renders the site logo (linking to "/"), three navigation items ("홈", "컨텐츠", "내 구독") whose active states are derived from the current router pathname, and a primary "로그인" button.
 * It adapts for mobile viewports by using a hamburger menu.
 */
export default function Header() {
  const { pathname } = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  const navItems = (
    <>
      <HeaderItem
        text={"홈"}
        icon={Home}
        href={"/"}
        isActive={pathname === "/"}
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
    </>
  );

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
        </div>

        <div className={s.desktop_only}>
          <nav className={s.items} aria-label="주요 메뉴">
            {navItems}
          </nav>
          <Button size="medium" variant="primary">
            로그인
          </Button>
        </div>

        <button
          className={s.hamburger_button}
          onClick={toggleMobileNav}
          aria-label="메뉴 열기/닫기"
        >
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileNavOpen && (
          <div className={s.mobile_nav}>
            <nav className={s.items} aria-label="주요 메뉴">
              {navItems}
            </nav>
            <Button size="medium" variant="primary">
              로그인
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
