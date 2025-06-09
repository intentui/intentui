"use client"

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
} from "@/components/ui/dialog"
import type { DialogProps, DialogTriggerProps, ModalOverlayProps } from "react-aria-components"
import {
  DialogTrigger as DialogTriggerPrimitive,
  ModalOverlay,
  Modal as ModalPrimitive,
  composeRenderProps,
} from "react-aria-components"
import { type VariantProps, tv } from "tailwind-variants"

const Modal = (props: DialogTriggerProps) => {
  return <DialogTriggerPrimitive {...props} />
}

const modalOverlayStyles = tv({
  base: [
    "fixed top-0 left-0 isolate z-50 h-(--visual-viewport-height) w-full",
    "flex items-end justify-end bg-fg/15 text-center sm:block dark:bg-bg/40",
    "[--visual-viewport-vertical-padding:16px] sm:[--visual-viewport-vertical-padding:32px]",
  ],
  variants: {
    isBlurred: {
      true: "bg-bg supports-backdrop-filter:bg-bg/15 supports-backdrop-filter:backdrop-blur dark:supports-backdrop-filter:bg-bg/40",
    },
    isEntering: {
      true: "fade-in animate-in duration-200 ease-out",
    },
    isExiting: {
      true: "fade-out animate-out ease-in",
    },
  },
})
const modalContentStyles = tv({
  base: [
    "max-h-full w-full rounded-t-2xl bg-overlay text-left align-middle text-overlay-fg shadow-lg ring-1 ring-fg/5",
    "overflow-hidden sm:rounded-2xl dark:ring-border",
    "sm:-translate-x-1/2 sm:-translate-y-1/2 sm:fixed sm:top-1/2 sm:left-[50vw]",
  ],
  variants: {
    isEntering: {
      true: [
        "fade-in slide-in-from-bottom animate-in duration-200 ease-out",
        "sm:zoom-in-95 sm:slide-in-from-bottom-0",
      ],
    },
    isExiting: {
      true: [
        "slide-out-to-bottom sm:slide-out-to-bottom-0 sm:zoom-out-95 animate-out duration-150 ease-in",
      ],
    },
    size: {
      xs: "sm:max-w-xs",
      sm: "sm:max-w-sm",
      md: "sm:max-w-md",
      lg: "sm:max-w-lg",
      xl: "sm:max-w-xl",
      "2xl": "sm:max-w-2xl",
      "3xl": "sm:max-w-3xl",
      "4xl": "sm:max-w-4xl",
      "5xl": "sm:max-w-5xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

interface ModalContentProps
  extends Omit<ModalOverlayProps, "className" | "children">,
    Pick<DialogProps, "aria-label" | "aria-labelledby" | "role" | "children">,
    VariantProps<typeof modalContentStyles> {
  closeButton?: boolean
  isBlurred?: boolean
  classNames?: {
    overlay?: ModalOverlayProps["className"]
    content?: ModalOverlayProps["className"]
  }
}

const ModalContent = ({
  classNames,
  isDismissable: isDismissableInternal,
  isBlurred = false,
  children,
  size,
  role = "dialog",
  closeButton = true,
  ...props
}: ModalContentProps) => {
  const isDismissable = isDismissableInternal ?? role !== "alertdialog"

  return (
    <ModalOverlay
      isDismissable={isDismissable}
      className={composeRenderProps(classNames?.overlay, (className, renderProps) =>
        modalOverlayStyles({
          ...renderProps,
          isBlurred,
          className,
        }),
      )}
      {...props}
    >
      <ModalPrimitive
        isDismissable={isDismissable}
        className={composeRenderProps(classNames?.content, (className, renderProps) =>
          modalContentStyles({
            ...renderProps,
            size,
            className,
          }),
        )}
        {...props}
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
