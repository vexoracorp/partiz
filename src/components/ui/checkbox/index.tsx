import { Check, Minus } from "lucide-react";
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { Typo } from "@/components/ui";
import s from "./style.module.scss";

export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "size"
    | "onChange"
    | "checked"
    | "defaultChecked"
    | "children"
    | "dangerouslySetInnerHTML"
  > {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  size?: CheckboxSize;
  className?: string;
}

export default function Checkbox(props: CheckboxProps) {
  const {
    id,
    checked,
    defaultChecked,
    indeterminate = false,
    onCheckedChange,
    onChange,
    disabled,
    readOnly,
    label,
    description,
    error,
    size = "md",
    className,
    ...rest
  } = props;

  // Filter out properties that shouldn't be passed to input element
  const inputProps = { ...rest };
  delete (inputProps as { children?: unknown }).children;
  delete (inputProps as { dangerouslySetInnerHTML?: unknown })
    .dangerouslySetInnerHTML;

  const isControlled = typeof checked === "boolean";
  const [internalChecked, setInternalChecked] = useState<boolean>(
    Boolean(defaultChecked),
  );
  const currentChecked = isControlled ? Boolean(checked) : internalChecked;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const autoId = useId();
  const inputId = id || `cb_${autoId}`;
  const descriptionId = description ? `${inputId}-desc` : undefined;
  const errorId = error ? `${inputId}-err` : undefined;

  // Reflect indeterminate state to the native input property
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate =
        Boolean(indeterminate) && !currentChecked;
    }
  }, [indeterminate, currentChecked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;

    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }
    onCheckedChange?.(e.target.checked);
    onChange?.(e);
  };

  const rootClassName = [
    s.wrapper,
    s[size],
    disabled ? s.disabled : undefined,
    error ? s.error : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={rootClassName} htmlFor={inputId}>
      <span className={s.control}>
        <input
          id={inputId}
          ref={inputRef}
          type="checkbox"
          className={s.input}
          checked={currentChecked}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          aria-checked={indeterminate ? "mixed" : currentChecked}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [descriptionId, errorId].filter(Boolean).join(" ") || undefined
          }
          {...inputProps}
        />
        <span className={s.box} aria-hidden="true">
          {indeterminate && !currentChecked ? (
            <Minus className={s.icon} />
          ) : currentChecked ? (
            <Check className={s.icon} />
          ) : null}
        </span>
      </span>

      {(label || description || error) && (
        <span className={s.texts}>
          {label && (
            <Typo.Body className={s.label}>
              {label}
            </Typo.Body>
          )}
          {description && (
            <Typo.Caption id={descriptionId} className={s.description}>
              {description}
            </Typo.Caption>
          )}
          {error && (
            <Typo.Caption id={errorId} className={s.errorText}>
              {error}
            </Typo.Caption>
          )}
        </span>
      )}
    </label>
  );
}
