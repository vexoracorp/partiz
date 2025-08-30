import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import s from "./styles.module.scss";

interface HeaderItemProps {
  text: string;
  icon: LucideIcon;
  isActive?: boolean;
  href_link: string;
}

export default function HeaderItem({
  text,
  icon: Icon,
  isActive = false,
  href_link,
}: HeaderItemProps) {
  return (
    <Link to={href_link} className={s.container}>
      <Icon
        className={s.icon}
        style={{ color: isActive ? "#151515" : "#7D7D7D" }}
      />
      <span
        className={s.text}
        style={{ color: isActive ? "#151515" : "#7D7D7D" }}
      >
        {text}
      </span>
    </Link>
  );
}
