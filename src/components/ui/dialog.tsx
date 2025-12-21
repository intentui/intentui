"use client"

import { XMarkIcon } from "@heroicons/react/24/solid"
import type { HeadingProps, TextProps } from "react-aria-components"
import {
  Heading,
  Button as PrimitiveButton,
  Dialog as PrimitiveDialog,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { Button, type ButtonProps } from "./button"

const Dialog = ({
  role = "dialog",
  className,
  ...props
}: React.ComponentProps<typeof PrimitiveDialog>) => {
  return (
    <PrimitiveDialog
      data-slot="dialog"
      role={role}
      className={twMerge(
        "peer/dialog group/dialog relative flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-hidden outline-hidden [--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]",
        className,
      )}
      {...props}
    />
  )
}

const DialogTrigger = ({ className, ...props }: ButtonProps) => (
  <PrimitiveButton className={cx("cursor-pointer", className)} {...props} />
)

interface DialogHeaderProps extends Omit<React.ComponentProps<"div">, "title"> {
  title?: string
  description?: string
}

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return (
    <div
      data-slot="dialog-header"
      className={twMerge(
        "relative space-y-1 p-(--gutter) pb-[calc(var(--gutter)---spacing(3))]",
        className,
      )}
    >
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      {props.description && <DialogDescription>{props.description}</DialogDescription>}
      {!props.title && typeof props.children === "string" ? (
        <DialogTitle>{props.children}</DialogTitle>
      ) : (
        props.children
      )}
    </div>
  )
}

interface DialogTitleProps extends HeadingProps {
  ref?: React.Ref<HTMLHeadingElement>
}
const DialogTitle = ({ className, ref, ...props }: DialogTitleProps) => (
  <Heading
    slot="title"
    ref={ref}
    className={twMerge("text-balance font-semibold text-fg text-lg/6 sm:text-base/6", className)}
    {...props}
  />
)

interface DialogDescriptionProps extends TextProps {
  ref?: React.Ref<HTMLDivElement>
}
const DialogDescription = ({ className, ref, ...props }: DialogDescriptionProps) => (
  <p
    data-slot="description"
    className={twMerge(
      "text-pretty text-base/6 text-muted-fg group-disabled:opacity-50 sm:text-sm/6",
      className,
    )}
    ref={ref}
    {...props}
  />
)

interface DialogBodyProps extends React.ComponentProps<"div"> {}
const DialogBody = ({ className, ...props }: DialogBodyProps) => (
  <div
    data-slot="dialog-body"
    className={twMerge(
      "isolate flex min-h-0 flex-1 flex-col overflow-auto px-(--gutter) py-1",
      "**:data-[slot=dialog-footer]:px-0 **:data-[slot=dialog-footer]:pt-0",
      className,
    )}
    {...props}
  />
)

const DialogFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-footer"
      className={twMerge(
        "isolate mt-auto flex flex-col-reverse justify-end gap-3 p-(--gutter) pt-[calc(var(--gutter)---spacing(2))] group-not-has-data-[slot=dialog-body]/dialog:pt-0 group-not-has-data-[slot=dialog-body]/popover:pt-0 sm:flex-row",
        className,
      )}
      {...props}
    />
  )
}

const DialogClose = ({ intent = "plain", ref, ...props }: ButtonProps) => {
  return <Button slot="close" ref={ref} intent={intent} {...props} />
}

interface CloseButtonIndicatorProps extends Omit<ButtonProps, "children"> {
  className?: string
  isDismissable?: boolean | undefined
}

const DialogCloseIcon = ({ className, ...props }: CloseButtonIndicatorProps) => {
  return props.isDismissable ? (
    <PrimitiveButton
      aria-label="Close"
      slot="close"
      className={cx(
        "close absolute top-1 right-1 z-50 grid size-8 place-content-center rounded-xl hover:bg-secondary focus:bg-secondary focus:outline-hidden focus-visible:ring-1 focus-visible:ring-primary sm:top-2 sm:right-2 sm:size-7 sm:rounded-md",
        className,
      )}
    >
      <XMarkIcon className="size-4" />
    </PrimitiveButton>
  ) : null
}

export type {
  DialogHeaderProps,
  DialogTitleProps,
  DialogBodyProps,
  DialogDescriptionProps,
  CloseButtonIndicatorProps,
}
export {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogCloseIcon,
}
