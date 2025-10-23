"use client"

import { twMerge } from "tailwind-merge"
import { tv, type VariantProps } from "tailwind-variants"

const buttonGroupStyles = tv({
  base: "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  variants: {
    orientation: {
      horizontal:
        "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
      vertical:
        "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

export function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupStyles>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={buttonGroupStyles({ orientation, className })}
      {...props}
    />
  )
}

export function ButtonGroupText({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-2 rounded-md border bg-muted px-4 font-medium text-sm shadow-xs *:data-[slot=icon]:pointer-events-none [&_[data-slot=icon]:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}
