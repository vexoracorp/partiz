import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import s from "./styles.module.scss";
import Typo from "../../typo";

interface HeaderItemProps {
  text: string;
  icon: LucideIcon;
  isActive?: boolean;
  href: string;
}

/**
 * Renders a header navigation item consisting of an icon and text inside a router Link.
 *
 * The icon and text color adapt based on `isActive` (dark when active, muted when not).
 *
 * @param text - Visible label for the navigation item.
 * @param icon - Lucide icon component to render.
 * @param isActive - When true, renders the item in its active (dark) color. Defaults to `false`.
 * @param href_link - Destination path passed to the Link's `to` prop.
 * @returns A JSX element linking to `href_link` that displays the icon and label.
 */
export default function HeaderItem({
  text,
  icon: Icon,
  isActive = false,
  href,
}: HeaderItemProps) {
  return (
    <Link to={href} className={s.container}>
      <Icon
        className={s.icon}
        style={{ color: isActive ? "#151515" : "#7D7D7D" }}
      />
      <Typo.Body
        className={s.text}
        style={{ color: isActive ? "#151515" : "#7D7D7D" }}
      >
        {text}
      </Typo.Body>
    </Link>
  );
}
