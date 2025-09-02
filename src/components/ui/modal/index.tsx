import { X } from "lucide-react";
import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import Typo from "../typo";

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

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (mounted && open) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [mounted, open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      close();
    };

    const handleClick = (e: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;

      if (!isInDialog) {
        close();
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("click", handleClick);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("click", handleClick);
    };
  }, [close]);

  if (!mounted) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className={`${s.dialog} ${s[size]} ${visible ? s.open : s.closed} ${className || ""}`}
      data-open={visible}
    >
      <div className={s.content}>
        <div className={s.headerContainer}>
          <div className={s.header}>
            {title ? (
              <Typo.Headline as="h2" className={s.title}>
                {title}
              </Typo.Headline>
            ) : (
              header
            )}
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
    </dialog>,
    document.body,
  );
}
