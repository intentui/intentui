"use client"

import React from "react"

import { useTheme } from "@/components/theme-provider"
import { IconCheck, IconCircleExclamationFill, IconTriangleExclamationFill } from "@intentui/icons"
import { Toaster as ToasterPrimitive, type ToasterProps } from "sonner"
import { twJoin } from "tailwind-merge"

import { buttonStyles } from "./button"
import { Loader } from "./loader"

const Toast = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
  return (
    <ToasterPrimitive
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        info: <IconCircleExclamationFill />,
        success: <IconCheck />,
        warning: <IconTriangleExclamationFill />,
        error: <IconTriangleExclamationFill />,
        loading: <Loader variant="spin" />
      }}
      toastOptions={{
        unstyled: true,
        closeButton: true,
        classNames: {
          toast: twJoin(
            "bg-bg ring-1 ring-border dark:ring-inset sm:min-w-[22rem] rounded-xl text-fg overflow-hidden text-[0.925rem] backdrop-blur-xl px-4 py-3 font-normal sm:px-5 sm:py-5",
            "[&:has([data-icon])_[data-content]]:ml-5",
            '[&:has([data-button])_[data-close-button="true"]]:hidden',
            "[&:not([data-description])_[data-title]]:font-normal",
            "[&:has([data-description])_[data-title]]:!font-medium [&:has([data-description])_[data-title]]:!text-lg",
            "[&>[data-button]]:absolute [&>[data-button=true]]:bottom-4",
            "[&>[data-action=true]]:right-4",
            "[&>[data-cancel=true]]:left-4"
          ),
          icon: "absolute top-[1rem] sm:top-[1.50rem]",
          content: "[&:not(:has(+button))]:pr-10 [&:has(+button)]:pb-11 md:[&:has(+button)]:pb-9",
          error:
            "bg-danger ring-danger-fg/10 text-white ring-inset [&>[data-close-button=true]>svg]:text-white",
          info: "bg-info ring-info-fg/10 text-info-fg ring-inset [&>[data-close-button=true]>svg]:text-info-fg",
          warning:
            "bg-warning text-warning-fg ring-warning-fg/10 ring-inset [&>[data-close-button=true]>svg]:text-amber-950",
          success:
            "bg-primary ring-primary/50 text-primary-fg ring-inset [&>[data-close-button=true]>svg]:text-primary-fg",
          cancelButton: buttonStyles({
            className: "",
            size: "extra-small",
            appearance: "outline"
          }),
          actionButton: buttonStyles({
            className: "self-end justify-self-end",
            size: "extra-small"
          }),
          closeButton: twJoin([
            "[&_svg]:size-5 size-8 absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-3 left-auto grid place-content-center rounded-md !bg-transparent hover:!bg-dark/20 dark:hover:!bg-white/20 border-0 [&_svg]:text-fg"
          ])
        }
      }}
      {...props}
    />
  )
}

export { Toast }
