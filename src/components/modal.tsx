import { useState, type ReactNode } from "react";
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { cn } from "../lib/utils";
import { Button } from "./button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export type ModalSize = "sm" | "md" | "lg" | "xl";

const MODAL_SIZE_CLASS: Record<ModalSize, string> = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-lg",
  lg: "sm:max-w-2xl",
  xl: "sm:max-w-4xl",
};

export type ModalProps = {
  readonly open?: boolean;
  readonly onOpenChange?: (open: boolean) => void;
  readonly trigger?: ReactNode;
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly children?: ReactNode;
  readonly footer?: ReactNode;
  readonly size?: ModalSize;
  readonly responsive?: boolean;
  readonly showCloseButton?: boolean;
  readonly preventOutsideClose?: boolean;
  readonly className?: string;
  readonly bodyClassName?: string;
};

function Modal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  size = "md",
  responsive = true,
  showCloseButton = true,
  preventOutsideClose = false,
  className,
  bodyClassName,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogPortal>
        <DialogOverlay className="bg-black/60 backdrop-blur-[2px]" />
        <DialogPrimitive.Content
          data-slot="modal-content"
          onPointerDownOutside={
            preventOutsideClose ? (event) => event.preventDefault() : undefined
          }
          onEscapeKeyDown={
            preventOutsideClose ? (event) => event.preventDefault() : undefined
          }
          className={cn(
            "fixed z-50 flex max-h-[85dvh] w-full flex-col overflow-hidden border bg-background shadow-xl duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
            responsive
              ? "inset-x-0 bottom-0 rounded-t-2xl border-x-0 border-b-0 pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom sm:inset-auto sm:top-1/2 sm:left-1/2 sm:max-w-[calc(100%-2rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl sm:border sm:pb-0 sm:data-[state=closed]:slide-out-to-bottom-0 sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:slide-in-from-bottom-0 sm:data-[state=open]:zoom-in-95"
              : "top-1/2 left-1/2 max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            MODAL_SIZE_CLASS[size],
            className,
          )}
        >
          {responsive && (
            <div
              aria-hidden="true"
              className="mx-auto mt-2.5 h-1 w-9 shrink-0 rounded-full bg-muted-foreground/30 sm:hidden"
            />
          )}
          <DialogHeader className="shrink-0 border-b px-5 py-4 text-left">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 space-y-1">
                <DialogTitle>{title}</DialogTitle>
                {description && (
                  <DialogDescription>{description}</DialogDescription>
                )}
              </div>
              {showCloseButton && (
                <DialogPrimitive.Close
                  data-slot="modal-close"
                  className="-mt-1 -mr-1 flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none"
                >
                  <XIcon className="size-4" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              )}
            </div>
          </DialogHeader>
          {children !== undefined && (
            <div
              data-slot="modal-body"
              className={cn(
                "min-h-0 flex-1 overflow-y-auto px-5 py-4",
                bodyClassName,
              )}
            >
              {children}
            </div>
          )}
          {footer && (
            <DialogFooter className="shrink-0 border-t px-5 py-3.5">
              {footer}
            </DialogFooter>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

export type ConfirmDialogProps = {
  readonly open?: boolean;
  readonly onOpenChange?: (open: boolean) => void;
  readonly trigger?: ReactNode;
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly confirmLabel?: string;
  readonly cancelLabel?: string;
  readonly variant?: "default" | "destructive";
  readonly busy?: boolean;
  readonly onConfirm: () => void | Promise<void>;
};

function ConfirmDialog({
  open: controlledOpen,
  onOpenChange,
  trigger,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  busy = false,
  onConfirm,
}: ConfirmDialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const isBusy = busy || pending;

  const setOpen = (next: boolean) => {
    if (isBusy && !next) {
      return;
    }
    if (!isControlled) {
      setUncontrolledOpen(next);
    }
    onOpenChange?.(next);
  };

  const handleConfirm = async () => {
    if (isBusy) {
      return;
    }
    setPending(true);
    try {
      await onConfirm();
      if (!isControlled) {
        setUncontrolledOpen(false);
      }
      onOpenChange?.(false);
    } finally {
      setPending(false);
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      trigger={trigger}
      title={title}
      description={description}
      size="sm"
      showCloseButton={!isBusy}
      preventOutsideClose={isBusy}
      footer={
        <>
          <Button
            type="button"
            variant="outline"
            disabled={isBusy}
            onClick={() => setOpen(false)}
          >
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={variant}
            disabled={isBusy}
            onClick={() => {
              void handleConfirm();
            }}
          >
            {isBusy ? "Working..." : confirmLabel}
          </Button>
        </>
      }
    />
  );
}

export { ConfirmDialog, Modal };
