import { LucideIcon } from "lucide-react";
import Link from "next/link";

import styles from "./styles.module.scss";

interface ButtonProps {
  icon?: LucideIcon;
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  href_link?: string;
}

export default function Button({
  icon: icon,
  text,
  onClick,
  className,
  disabled,
  isLoading,
  href_link,
}: ButtonProps) {
  return (
    <Link href={href_link}>
      <div
        className={[styles.container, className].join(" ")}
        onClick={() => {
          if (disabled || isLoading) return;

          if (onClick) {
            onClick();
          }
        }}
        style={{
          backgroundColor: disabled || isLoading ? "#CACACA" : "#45C1FF",
        }}
      >
        {isLoading ? (
          <ClipLoader size={"16px"} color={"#fff"} />
        ) : (
          <>
            {text && <p style={{ color: "#fff" }}>{text}</p>}
            <icon icon={icon} color={"#fff"} width={28} height={28} />
          </>
        )}
      </div>
    </Link>
  );
}
