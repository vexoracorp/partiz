import { X } from "lucide-react";
import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

import s from "./style.module.scss";

type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size?: ModalSize;
  showCloseButton?: boolean;
  header?: ReactNode;
  title?: string;
  className?: string;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const {
    open,
    onOpenChange,
    size = "md",
    showCloseButton = true,
    header,
    title,
    className,
    children,
  } = props;

  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);
  const close = () => onOpenChange(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 280);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`${s.overlay} ${visible ? s.open : s.closed}`}
      data-open={visible}
    >
      <div className={s.center}>
        <div
          className={[
            s.dialog,
            s[size],
            visible ? s.open : s.closed,
            className || "",
          ].join(" ")}
        >
          <div className={s.headerContainer}>
            <div className={s.header}>
              {title ? <h2 className={s.title}>{title}</h2> : header}
            </div>
            {showCloseButton && (
              <button
                type="button"
                aria-label="Close"
                className={s.close}
                onClick={close}
              >
                <X className={s.closeIcon} />
              </button>
            )}
          </div>
          <div className={s.body}>{children}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
