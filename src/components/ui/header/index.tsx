"use client";

import { Home, LayoutGrid, ListVideo } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Subscription from "@/app/subscription/page";
import Button from "@/components/ui/button";
import HeaderItem from "@/components/ui/header/header-item";

import s from "./styles.module.scss";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <div className={s.right}>
        <Link href="/" className={s.logoLink}>
          <Image
            className={s.logo}
            src={"/logo.svg"}
            alt="logo"
            width={94}
            height={26}
          />
        </Link>
        <div className={s.menu}>
          <HeaderItem
            text="홈"
            icon={Home}
            href_link="/"
            isActive={pathname === "/"}
          />
          <HeaderItem
            text="컨텐츠"
            icon={ListVideo}
            href_link="/my-contents"
            isActive={pathname.startsWith("/my-contents")}
          />
          <HeaderItem
            text="내 구독"
            icon={LayoutGrid}
            href_link="/subscription"
            isActive={pathname.startsWith("/subscription")}
          />
        </div>
      </div>
      <Button className={s.button} text="로그인" href_link="auth" />
    </header>
  );
}
