"use client"

import { useEffect, useRef } from "react"

import { IconX } from "@intentui/icons"
import type { HeadingProps } from "react-aria-components"
import {
  Button as ButtonPrimitive,
  Dialog as DialogPrimitive,
  Heading,
  Text,
} from "react-aria-components"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { twJoin, twMerge } from "tailwind-merge"

const Dialog = ({
  role = "dialog",
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive>) => {
  return (
    <DialogPrimitive
      role={role}
      className={twMerge(
        "peer/dialog group/dialog relative flex max-h-[inherit] flex-col overflow-hidden outline-hidden [scrollbar-width:thin] [&::-webkit-scrollbar]:size-0.5",
        className,
      )}
      {...props}
    />
  )
}

const DialogTrigger = (props: React.ComponentProps<typeof ButtonPrimitive>) => (
  <ButtonPrimitive {...props} />
)

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string
  description?: string
}

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  const headerRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) {
      return
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        header.parentElement?.style.setProperty(
          "--dialog-header-height",
          `${entry.target.clientHeight}px`,
        )
      }
    })

    observer.observe(header)
    return () => observer.unobserve(header)
  }, [])

  return (
    <div
      data-slot="dialog-header"
      ref={headerRef}
      className={twMerge(
        "relative flex flex-col gap-0.5 p-4 sm:gap-1 sm:p-6 [&[data-slot=dialog-header]:has(+[data-slot=dialog-footer])]:pb-0",
        className,
      )}
    >
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      {props.description && <DialogDescription>{props.description}</DialogDescription>}
      {!props.title && typeof props.children === "string" ? (
        <DialogTitle {...props} />
      ) : (
        props.children
      )}
    </div>
  )
}

interface DialogTitleProps extends Omit<HeadingProps, "level"> {
  level?: 1 | 2 | 3 | 4
  ref?: React.Ref<HTMLHeadingElement>
}
const DialogTitle = ({ level = 2, className, ref, ...props }: DialogTitleProps) => (
  <Heading
    slot="title"
    level={level}
    ref={ref}
    className={twMerge(
      twJoin(
        "flex flex-1 items-center text-fg",
        level === 1 && "font-semibold text-lg sm:text-xl",
        level === 2 && "font-semibold text-lg sm:text-xl",
        level === 3 && "font-semibold text-base sm:text-lg",
        level === 4 && "font-semibold text-base",
      ),
      className,
    )}
    {...props}
  />
)

type DialogDescriptionProps = React.ComponentProps<"div">
const DialogDescription = ({ className, ref, ...props }: DialogDescriptionProps) => (
  <Text
    slot="description"
    className={twMerge("text-muted-fg text-sm", className)}
    ref={ref}
    {...props}
  />
)

type DialogBodyProps = React.ComponentProps<"div">
const DialogBody = ({ className, ref, ...props }: DialogBodyProps) => (
  <div
    data-slot="dialog-body"
    ref={ref}
    className={twMerge(
      "isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))] flex-1 flex-col overflow-auto px-4 py-1 sm:px-6",
      className,
    )}
    {...props}
  />
)

type DialogFooterProps = React.ComponentProps<"div">
const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const footer = footerRef.current

    if (!footer) {
      return
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        footer.parentElement?.style.setProperty(
          "--dialog-footer-height",
          `${entry.target.clientHeight}px`,
        )
      }
    })

    observer.observe(footer)
    return () => {
      observer.unobserve(footer)
    }
  }, [])
  return (
    <div
      ref={footerRef}
      data-slot="dialog-footer"
      className={twMerge(
        "isolate mt-auto flex flex-col-reverse justify-between gap-3 p-4 pt-3 sm:flex-row sm:p-6 sm:pt-5",
        className,
      )}
      {...props}
    />
  )
}

const DialogClose = ({ className, intent = "outline", ref, ...props }: ButtonProps) => {
  return <Button slot="close" className={className} ref={ref} intent={intent} {...props} />
}

interface CloseButtonIndicatorProps extends Omit<ButtonProps, "children"> {
  className?: string
  isDismissable?: boolean | undefined
}

const DialogCloseIcon = ({ className, ...props }: CloseButtonIndicatorProps) => {
  const isMobile = useMediaQuery("(max-width: 600px)")
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isMobile && buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [isMobile])
  return props.isDismissable ? (
    <ButtonPrimitive
      ref={buttonRef}
      {...(isMobile ? { autoFocus: true } : {})}
      aria-label="Close"
      slot="close"
      className={composeTailwindRenderProps(
        className,
        "close absolute top-1 right-1 z-50 grid size-8 place-content-center rounded-xl hover:bg-secondary focus:bg-secondary focus:outline-hidden focus-visible:ring-1 focus-visible:ring-primary sm:top-2 sm:right-2 sm:size-7 sm:rounded-md",
      )}
    >
      <IconX className="size-4" />
    </ButtonPrimitive>
  ) : null
}

export type {
  DialogHeaderProps,
  DialogTitleProps,
  DialogBodyProps,
  DialogFooterProps,
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
