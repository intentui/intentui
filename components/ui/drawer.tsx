"use client"

import { AnimatePresence, motion } from "motion/react"
import { use } from "react"
import type {
  DialogProps,
  DialogTriggerProps,
  HeadingProps,
  ModalOverlayProps,
  TextProps,
} from "react-aria-components"
import {
  Button as ButtonPrimitive,
  Dialog,
  DialogTrigger,
  Heading,
  ModalOverlay,
  Modal as ModalPrimitive,
  OverlayTriggerStateContext,
  Text,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { Button, type ButtonProps } from "./button"

const Modal = motion.create(ModalPrimitive)
const Overlay = motion.create(ModalOverlay)

const Drawer = (props: DialogTriggerProps) => <DialogTrigger {...props} />

interface DrawerContentProps
  extends Omit<ModalOverlayProps, "className" | "children" | "isDismissable">,
    Pick<DialogProps, "aria-label" | "aria-labelledby" | "role" | "children" | "className"> {
  isFloating?: boolean
  isBlurred?: boolean
  className?: string
  style?: React.CSSProperties
  side?: "top" | "bottom" | "left" | "right"
  withNotch?: boolean
}

const DrawerContent = ({
  side = "bottom",
  isFloating = false,
  isBlurred = true,
  withNotch = true,
  children,
  className,
  ...props
}: DrawerContentProps) => {
  const state = use(OverlayTriggerStateContext)!

  return (
    <AnimatePresence>
      {(props?.isOpen || state?.isOpen) && (
        <Overlay
          isDismissable
          isOpen={props?.isOpen || state?.isOpen}
          onOpenChange={props?.onOpenChange || state?.setOpen}
          initial={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
          animate={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: isBlurred ? "blur(4px)" : "blur(0px)",
          }}
          exit={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
          className="fixed inset-0 z-50 will-change-auto [--visual-viewport-vertical-padding:32px]"
        >
          {({ state }) => (
            <Modal
              className={twJoin(
                "fixed max-h-full touch-none overflow-hidden bg-bg align-middle text-fg shadow-sm will-change-transform",
                side === "top" &&
                  `${
                    isFloating
                      ? "inset-x-2 top-2 rounded-lg border"
                      : "inset-x-0 top-0 rounded-b-2xl border-b"
                  }`,
                side === "right" &&
                  `w-full max-w-xs overflow-y-auto **:[[slot=header]]:text-left ${
                    isFloating
                      ? "inset-y-2 right-2 rounded-lg border"
                      : "inset-y-0 right-0 h-auto border-l"
                  }`,
                side === "bottom" &&
                  `${
                    isFloating
                      ? "inset-x-2 bottom-2 rounded-lg border"
                      : "inset-x-0 bottom-0 rounded-t-2xl border-t"
                  }`,
                side === "left" &&
                  `w-full max-w-xs overflow-y-auto **:[[slot=header]]:text-left ${
                    isFloating
                      ? "inset-y-2 left-2 rounded-lg border"
                      : "inset-y-0 left-0 h-auto border-r"
                  }`,
                className,
              )}
              initial={{
                x: side === "left" ? "-100%" : side === "right" ? "100%" : 0,
                y: side === "top" ? "-100%" : side === "bottom" ? "100%" : 0,
              }}
              animate={{ x: 0, y: 0 }}
              exit={{
                x: side === "left" ? "-100%" : side === "right" ? "100%" : 0,
                y: side === "top" ? "-100%" : side === "bottom" ? "100%" : 0,
              }}
              drag={side === "left" || side === "right" ? "x" : "y"}
              whileDrag={{ cursor: "grabbing" }}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              onDragEnd={(_, { offset, velocity }) => {
                if (side === "bottom" && (velocity.y > 150 || offset.y > screen.height * 0.25)) {
                  state.close()
                }
                if (side === "top" && (velocity.y < -150 || offset.y < screen.height * 0.25)) {
                  state.close()
                }
                if (side === "left" && velocity.x < -150) {
                  state.close()
                }
                if (side === "right" && velocity.x > 150) {
                  state.close()
                }
              }}
              dragElastic={{
                top: side === "top" ? 1 : 0,
                bottom: side === "bottom" ? 1 : 0,
                left: side === "left" ? 1 : 0,
                right: side === "right" ? 1 : 0,
              }}
              dragPropagation
            >
              <Dialog
                aria-label="Drawer"
                role="dialog"
                className={twJoin(
                  "relative flex flex-col overflow-hidden outline-hidden will-change-auto",
                  side === "top" || side === "bottom"
                    ? "mx-auto max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] max-w-lg"
                    : "h-full",
                )}
              >
                {withNotch && side === "bottom" && (
                  <div className="notch sticky top-0 mx-auto mt-2.5 h-1.5 w-10 shrink-0 touch-pan-y rounded-full bg-fg/20" />
                )}
                {children as React.ReactNode}
                {withNotch && side === "top" && (
                  <div className="notch sticky bottom-0 mx-auto mb-2.5 h-1.5 w-10 shrink-0 touch-pan-y rounded-full bg-fg/20" />
                )}
              </Dialog>
            </Modal>
          )}
        </Overlay>
      )}
    </AnimatePresence>
  )
}

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      slot="header"
      className={twMerge("flex flex-col p-4 text-center sm:text-left", className)}
      {...props}
    />
  )
}

const DrawerTitle = ({ className, ...props }: HeadingProps) => (
  <Heading slot="title" className={twMerge("font-semibold text-lg/8", className)} {...props} />
)

const DrawerDescription = ({ className, ...props }: TextProps) => (
  <Text slot="description" className={twMerge("text-muted-fg text-sm", className)} {...props} />
)

const DrawerBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    slot="body"
    className={twMerge(
      "isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-auto px-4 py-1 will-change-scroll",
      className,
    )}
    {...props}
  />
)

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      slot="footer"
      className={twMerge(
        "isolate mt-auto flex flex-col-reverse justify-end gap-2 p-4 sm:flex-row",
        className,
      )}
      {...props}
    />
  )
}

const DrawerClose = ({ className, intent = "outline", ref, ...props }: ButtonProps) => {
  return <Button slot="close" className={className} ref={ref} intent={intent} {...props} />
}

Drawer.Trigger = ButtonPrimitive
Drawer.Footer = DrawerFooter
Drawer.Header = DrawerHeader
Drawer.Title = DrawerTitle
Drawer.Description = DrawerDescription
Drawer.Body = DrawerBody
Drawer.Content = DrawerContent
Drawer.Close = DrawerClose

export { Drawer }
export type { DrawerContentProps }
