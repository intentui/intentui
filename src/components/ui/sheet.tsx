"use client"

import type { DialogProps, ModalOverlayProps } from "react-aria-components"
import { DialogTrigger as DialogTriggerPrimitive, Modal, ModalOverlay } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogCloseIcon,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

const Sheet = DialogTriggerPrimitive

interface SheetContentProps
  extends Omit<ModalOverlayProps, "children">,
    Pick<DialogProps, "aria-label" | "role" | "aria-labelledby" | "children"> {
  closeButton?: boolean
  isFloat?: boolean
  side?: "top" | "bottom" | "left" | "right"
  overlay?: Omit<ModalOverlayProps, "children">
}

const sideVariants: Record<string, string> = {
  top: "entering:slide-in-from-top exiting:slide-out-to-top inset-x-0 top-0 rounded-b-2xl border-b data-[float=true]:inset-x-2 data-[float=true]:top-2 data-[float=true]:border-b-0",
  bottom:
    "entering:slide-in-from-bottom exiting:slide-out-to-bottom inset-x-0 bottom-0 rounded-t-2xl border-t data-[float=true]:inset-x-2 data-[float=true]:bottom-2 data-[float=true]:border-t-0",
  left: "entering:slide-in-from-left exiting:slide-out-to-left-80 inset-y-0 left-0 h-auto w-3/4 overflow-y-auto border-r sm:max-w-80 data-[float=true]:inset-y-2 data-[float=true]:left-2 data-[float=true]:border-r-0",
  right:
    "entering:slide-in-from-right exiting:slide-out-to-right-80 inset-y-0 right-0 h-auto w-3/4 overflow-y-auto border-l sm:max-w-80 data-[float=true]:inset-y-2 data-[float=true]:right-2 data-[float=true]:border-l-0",
}

const SheetContent = ({
  className,
  isDismissable: isDismissableInternal,
  side = "right",
  role = "dialog",
  closeButton = true,
  isFloat = true,
  overlay,
  children,
  ...props
}: SheetContentProps) => {
  const isDismissable = isDismissableInternal ?? role !== "alertdialog"
  return (
    <ModalOverlay
      isDismissable={isDismissable}
      className={twJoin(
        "fixed top-0 left-0 z-50 w-full overflow-hidden bg-black/15",
        "entering:fade-in entering:animate-in entering:duration-500",
        "exiting:fade-out exiting:animate-out exiting:duration-300",
        isFloat ? "h-full" : "h-(--page-height)",
      )}
      {...props}
    >
      <Modal
        data-float={isFloat}
        className={cx(
          "fixed z-50 grid gap-4 border-muted-fg/20 bg-overlay text-overlay-fg shadow-lg dark:border-border",
          "transform-gpu transition ease-in-out will-change-transform [--visual-viewport-vertical-padding:16px]",
          "data-[float=true]:rounded-lg data-[float=true]:ring data-[float=true]:ring-fg/5 dark:data-[float=true]:ring-border",
          "border-fg/20 dark:border-border",
          "entering:fade-in entering:animate-in entering:duration-500",
          "exiting:fade-in exiting:animate-out exiting:duration-300",
          sideVariants[side],
          className,
        )}
      >
        <Dialog className="sm:[--gutter:--spacing(6)]" aria-label={props["aria-label"]} role={role}>
          {(values) => (
            <>
              {typeof children === "function" ? children(values) : children}
              {closeButton && (
                <DialogCloseIcon className="top-2.5 right-2.5" isDismissable={isDismissable} />
              )}
            </>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  )
}

const SheetTrigger = DialogTrigger
const SheetFooter = DialogFooter
const SheetHeader = DialogHeader
const SheetTitle = DialogTitle
const SheetDescription = DialogDescription
const SheetBody = DialogBody
const SheetClose = DialogClose

export type { SheetContentProps }
export {
  Sheet,
  SheetTrigger,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetClose,
  SheetContent,
}
