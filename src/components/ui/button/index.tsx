import type { ButtonHTMLAttributes, ReactNode } from "react";

import s from "./style.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "large" | "medium";
  variant?: "primary" | "secondary" | "tertiary";
  pending?: boolean;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export default function Button({
  children,
  size = "medium",
  variant = "primary",
  pending = false,
  disabled,
  className,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  ...props
}: ButtonProps) {
  const buttonClassName = [
    s.button,
    s[size],
    s[variant],
    pending && s.pending,
    disabled && s.disabled,
    className,
    fullWidth && s.fullWidth,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClassName}
      disabled={disabled || pending}
      {...props}
    >
      {pending && <div className={s.spinner} />}
      <div className={pending ? s.hiddenContent : s.buttonContent}>
        {leadingIcon && <span className={s.leadingIcon}>{leadingIcon}</span>}
        <span className={s.text}>{children}</span>
        {trailingIcon && <span className={s.trailingIcon}>{trailingIcon}</span>}
      </div>
    </button>
  );
}
