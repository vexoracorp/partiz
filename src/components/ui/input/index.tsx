import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

import s from "./style.module.scss";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: "large" | "medium";
  variant?: "primary" | "secondary";
  error?: string;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = "medium",
      variant = "primary",
      error,
      disabled,
      className,
      fullWidth = false,
      leftIcon,
      rightIcon,
      required = false,
      ...props
    },
    ref,
  ) => {
    const inputWrapperClassName = [
      s.inputWrapper,
      s[size],
      s[variant],
      disabled && s.disabled,
      error && s.error,
      fullWidth && s.fullWidth,
      leftIcon && s.hasLeftIcon,
      rightIcon && s.hasRightIcon,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`${s.container} ${fullWidth ? s.fullWidth : ""}`}>
        {label && (
          <label className={s.label}>
            {label}
            {required && <span className={s.required}>*</span>}
          </label>
        )}
        <div className={inputWrapperClassName}>
          {leftIcon && <div className={s.leftIcon}>{leftIcon}</div>}
          <input
            ref={ref}
            className={s.input}
            disabled={disabled}
            required={required}
            {...props}
          />
          {rightIcon && <div className={s.rightIcon}>{rightIcon}</div>}
        </div>
        {error && <div className={s.errorMessage}>{error}</div>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
