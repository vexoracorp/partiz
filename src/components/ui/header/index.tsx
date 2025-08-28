import Image from "next/image";
import Link from "next/link";

import s from "./styles.module.scss";

export default function Header() {
  return (
    <header className={s.header}>
      <Link href="/" className={s.logoLink}>
        <Image className={s.logo} src={"/logo.svg"} alt="logo" />
      </Link>
      <div className={s.menu}>
        <Link
          href="/"
          data-active={
            location.pathname === "/" || location.pathname.includes("/detail")
          }
        >
          홈페이지
        </Link>
        <Link
          href="/subscription"
          data-active={location.pathname === "/subscription"}
        >
          내 구독
        </Link>
        <Link href="/" data-active={location.pathname === "/contact"}>
          고객센터
        </Link>
      </div>
    </header>
  );
}
