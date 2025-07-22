"use client"

import type { DialogProps, DialogTriggerProps, ModalOverlayProps } from "react-aria-components"
import {
  DialogTrigger as DialogTriggerPrimitive,
  ModalOverlay,
  Modal as ModalPrimitive,
} from "react-aria-components"
import { composeTailwindRenderProps } from "@/lib/primitive"
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

const Modal = (props: DialogTriggerProps) => {
  return <DialogTriggerPrimitive {...props} />
}

const sizes = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
}

interface ModalContentProps
  extends Omit<ModalOverlayProps, "className" | "children">,
    Pick<DialogProps, "aria-label" | "aria-labelledby" | "role" | "children"> {
  size?: keyof typeof sizes
  closeButton?: boolean
  isBlurred?: boolean
  className?: ModalOverlayProps["className"]
  overlay?: Omit<ModalOverlayProps, "children">
}

const ModalContent = ({
  className,
  isDismissable: isDismissableInternal,
  isBlurred = false,
  children,
  overlay,
  size = "lg",
  role = "dialog",
  closeButton = true,
  ...props
}: ModalContentProps) => {
  const isDismissable = isDismissableInternal ?? role !== "alertdialog"

  return (
    <ModalOverlay
      data-slot="modal-overlay"
      isDismissable={isDismissable}
      className={composeTailwindRenderProps(overlay?.className, [
        "fixed inset-0 z-50 h-(--visual-viewport-height) w-screen overscroll-contain bg-fg/15 pt-4 outline-hidden sm:p-16 dark:bg-bg/40",
        "grid grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr]",
        "entering:fade-in-0 entering:animate-in duration-200",
        "exiting:fade-out-0 exiting:animate-out",
        isBlurred &&
          "bg-bg bg-clip-padding supports-backdrop-filter:bg-bg/15 supports-backdrop-filter:backdrop-blur dark:supports-backdrop-filter:bg-bg/40",
      ])}
      {...props}
    >
      <ModalPrimitive
        data-slot="modal-content"
        className={composeTailwindRenderProps(className, [
          "relative row-start-2 max-h-full w-full overflow-hidden rounded-t-2xl bg-overlay text-left align-middle text-overlay-fg shadow-lg ring ring-fg/5 sm:rounded-2xl dark:ring-border",
          "exiting:slide-out-to-bottom sm:exiting:slide-out-to-bottom-0",
          "entering:slide-in-from-bottom sm:entering:slide-in-from-bottom-0",
          "sm:entering:zoom-in-95 entering:fade-in-0 entering:animate-in",
          "sm:exiting:zoom-out-95 exiting:fade-out-0 exiting:animate-out",
          sizes[size],
        ])}
      >
        <Dialog role={role}>
          {(values) => (
            <>
              {typeof children === "function" ? children(values) : children}
              {closeButton && <DialogCloseIcon isDismissable={isDismissable} />}
            </>
          )}
        </Dialog>
      </ModalPrimitive>
    </ModalOverlay>
  )
}

const ModalTrigger = DialogTrigger
const ModalHeader = DialogHeader
const ModalTitle = DialogTitle
const ModalDescription = DialogDescription
const ModalFooter = DialogFooter
const ModalBody = DialogBody
const ModalClose = DialogClose

Modal.Trigger = ModalTrigger
Modal.Header = ModalHeader
Modal.Title = ModalTitle
Modal.Description = ModalDescription
Modal.Footer = ModalFooter
Modal.Body = ModalBody
Modal.Close = ModalClose
Modal.Content = ModalContent

export { Modal }
