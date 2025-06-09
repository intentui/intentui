"use client"

import type { DialogProps, DialogTriggerProps, ModalOverlayProps } from "react-aria-components"
import {
  DialogTrigger as DialogTriggerPrimitive,
  Modal,
  ModalOverlay,
  composeRenderProps,
} from "react-aria-components"
import { type VariantProps, tv } from "tailwind-variants"

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

const overlayStyles = tv({
  base: [
    "fixed top-0 left-0 isolate z-50 flex h-(--visual-viewport-height) w-full items-center justify-center bg-fg/15 p-4 dark:bg-bg/40",
  ],
  variants: {
    isBlurred: {
      true: "bg-bg/15 backdrop-blur dark:bg-bg/40",
    },
    isEntering: {
      true: "fade-in animate-in duration-300 ease-out",
    },
    isExiting: {
      true: "fade-out animate-out duration-200 ease-in",
    },
  },
})

type Sides = "top" | "bottom" | "left" | "right"
const generateCompoundVariants = (sides: Array<Sides>) => {
  return sides.map((side) => ({
    side,
    isFloat: true,
    className:
      side === "top"
        ? "top-2 inset-x-2 rounded-xl ring-1 border-b-0"
        : side === "bottom"
          ? "bottom-2 inset-x-2 rounded-xl ring-1 border-t-0"
          : side === "left"
            ? "left-2 inset-y-2 rounded-xl ring-1 border-r-0"
            : "right-2 inset-y-2 rounded-xl ring-1 border-l-0",
  }))
}

const contentStyles = tv({
  base: "fixed z-50 grid gap-4 border-fg/5 bg-overlay text-overlay-fg shadow-lg transition ease-in-out dark:border-border",
  variants: {
    isEntering: {
      true: "animate-in duration-300 ",
    },
    isExiting: {
      true: "animate-out duration-200",
    },
    side: {
      top: "data-entering:slide-in-from-top data-exiting:slide-out-to-top inset-x-0 top-0 rounded-b-2xl border-b",
      bottom:
        "data-entering:slide-in-from-bottom data-exiting:slide-out-to-bottom inset-x-0 bottom-0 rounded-t-2xl border-t",
      left: "data-entering:slide-in-from-left data-exiting:slide-out-to-left inset-y-0 left-0 h-auto w-full max-w-xs overflow-y-auto border-r",
      right:
        "data-entering:slide-in-from-right data-exiting:slide-out-to-right inset-y-0 right-0 h-auto w-full max-w-xs overflow-y-auto border-l",
    },
    isFloat: {
      false: "border-fg/20 dark:border-border",
      true: "ring-fg/5 dark:ring-border",
    },
  },
  compoundVariants: generateCompoundVariants(["top", "bottom", "left", "right"]),
})

type SheetProps = DialogTriggerProps
const Sheet = (props: SheetProps) => {
  return <DialogTriggerPrimitive {...props} />
}

interface SheetContentProps
  extends Omit<React.ComponentProps<typeof Modal>, "children" | "className">,
    Omit<ModalOverlayProps, "className">,
    VariantProps<typeof overlayStyles> {
  "aria-label"?: DialogProps["aria-label"]
  "aria-labelledby"?: DialogProps["aria-labelledby"]
  role?: DialogProps["role"]
  closeButton?: boolean
  isBlurred?: boolean
  isFloat?: boolean
  side?: Sides
  classNames?: {
    overlay?: ModalOverlayProps["className"]
    content?: ModalOverlayProps["className"]
  }
}

const SheetContent = ({
  classNames,
  isBlurred = false,
  isDismissable = true,
  side = "right",
  role = "dialog",
  closeButton = true,
  isFloat = true,
  children,
  ...props
}: SheetContentProps) => {
  const _isDismissable = role === "alertdialog" ? false : isDismissable
  return (
    <ModalOverlay
      isDismissable={_isDismissable}
      className={composeRenderProps(classNames?.overlay, (className, renderProps) => {
        return overlayStyles({
          ...renderProps,
          isBlurred,
          className,
        })
      })}
      {...props}
    >
      <Modal
        className={composeRenderProps(classNames?.content, (className, renderProps) =>
          contentStyles({
            ...renderProps,
            side,
            isFloat,
            className,
          }),
        )}
        {...props}
      >
        {(values) => (
          <Dialog role={role} aria-label={props["aria-label"] ?? undefined} className="h-full">
            <>
              {typeof children === "function" ? children(values) : children}
              {closeButton && (
                <DialogCloseIcon className="top-2.5 right-2.5" isDismissable={_isDismissable} />
              )}
            </>
          </Dialog>
        )}
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

Sheet.Trigger = SheetTrigger
Sheet.Footer = SheetFooter
Sheet.Header = SheetHeader
Sheet.Title = SheetTitle
Sheet.Description = SheetDescription
Sheet.Body = SheetBody
Sheet.Close = SheetClose
Sheet.Content = SheetContent

export type { SheetProps, SheetContentProps, Sides }
export { Sheet }
