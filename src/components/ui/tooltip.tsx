"use client"

import type { TooltipProps as TooltipPrimitiveProps } from "react-aria-components"
import {
  Button,
  composeRenderProps,
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const tooltipStyles = tv({
  base: [
    "group rounded-lg border px-2.5 py-1.5 text-sm/6 will-change-transform dark:shadow-none *:[strong]:font-medium",
  ],
  variants: {
    intent: {
      default:
        "bg-overlay text-overlay-fg *:data-[slot=overlay-arrow]:fill-overlay *:data-[slot=overlay-arrow]:stroke-border",
      inverse:
        "border-transparent bg-fg text-bg *:data-[slot=overlay-arrow]:fill-fg *:data-[slot=overlay-arrow]:stroke-transparent dark:*:data-[slot=overlay-arrow]:fill-white [&_.text-muted-fg]:text-bg/70 dark:[&_.text-muted-fg]:text-fg/70",
    },
    isEntering: {
      true: [
        "fade-in animate-in",
        "placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1",
      ],
    },
    isExiting: {
      true: [
        "fade-in direction-reverse animate-in",
        "placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1",
      ],
    },
  },
  defaultVariants: {
    intent: "default",
  },
})

type TooltipProps = React.ComponentProps<typeof TooltipTriggerPrimitive>
const Tooltip = (props: TooltipProps) => <TooltipTriggerPrimitive {...props} />

interface TooltipContentProps
  extends Omit<TooltipPrimitiveProps, "children">,
    VariantProps<typeof tooltipStyles> {
  showArrow?: boolean
  children: React.ReactNode
}

const TooltipContent = ({
  offset = 10,
  showArrow = true,
  intent = "default",
  children,
  ...props
}: TooltipContentProps) => {
  return (
    <TooltipPrimitive
      {...props}
      offset={offset}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tooltipStyles({
          ...renderProps,
          intent,
          className,
        }),
      )}
    >
      {showArrow && (
        <OverlayArrow>
          <svg
            data-slot="overlay-arrow"
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="group-placement-left:-rotate-90 group-placement-bottom:rotate-180 group-placement-right:rotate-90 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </TooltipPrimitive>
  )
}

Tooltip.Trigger = Button
Tooltip.Content = TooltipContent

export type { TooltipProps, TooltipContentProps }
export { Tooltip }
