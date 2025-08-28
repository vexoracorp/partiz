import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

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
  icon: Icon,
  text,
  onClick,
  className,
  disabled,
  isLoading,
  href_link,
}: ButtonProps) {
  return (
    <Link href={href_link ?? "#"} style={{ textDecoration: "none" }}>
      <button
        className={[styles.container, className].join(" ")}
        disabled={disabled || isLoading}
        onClick={(e) => {
          if (disabled || isLoading) e.preventDefault();
          else if (onClick) onClick();
        }}
        style={{
          backgroundColor: disabled || isLoading ? "#CACACA" : "#45C1FF",
          cursor: disabled || isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? (
          <ClipLoader size={"16px"} color={"#fff"} />
        ) : (
          <>
            {text && <p style={{ color: "#fff" }}>{text}</p>}
            {Icon && <Icon color={"#fff"} width={28} height={28} />}
          </>
        )}
      </button>
    </Link>
  );
}
