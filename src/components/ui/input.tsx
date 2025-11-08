"use client"

import {
  Group,
  type GroupProps,
  Input as InputPrimitive,
  type InputProps as PrimitiveInputProps,
} from "react-aria-components"
import { cx } from "@/lib/primitive"

interface InputProps extends PrimitiveInputProps {
  ref?: React.RefObject<HTMLInputElement>
}

export function Input({ className, ref, ...props }: InputProps) {
  return (
    <span data-slot="control" className="relative block w-full">
      <InputPrimitive
        ref={ref}
        className={cx(
          "relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
          "text-base/6 text-fg placeholder:text-muted-fg sm:text-sm/6",
          "border border-input enabled:hover:border-muted-fg/30",
          "outline-hidden focus:border-ring/70 focus:ring-3 focus:ring-ring/20 focus:enabled:hover:border-ring/80",
          "invalid:border-danger-subtle-fg/70 focus:invalid:border-danger-subtle-fg/70 focus:invalid:ring-danger-subtle-fg/20 invalid:enabled:hover:border-danger-subtle-fg/80 focus:invalid:enabled:hover:border-danger-subtle-fg/80",
          "[&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden",
          "disabled:bg-muted forced-colors:in-disabled:text-[GrayText]",
          "in-disabled:bg-muted forced-colors:in-disabled:text-[GrayText]",
          "dark:scheme-dark",
          className,
        )}
        {...props}
      />
    </span>
  )
}

export function InputGroup({ className, ...props }: GroupProps) {
  return (
    <Group
      data-slot="control"
      className={cx(
        "relative isolate block",
        // icon
        "has-[>[data-slot=icon]:last-child]:[&_input]:pr-10 has-[>[data-slot=icon]:first-child]:[&_input]:pl-10 sm:has-[>[data-slot=icon]:last-child]:[&_input]:pr-8 sm:has-[>[data-slot=icon]:first-child]:[&_input]:pl-8",
        "*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4",
        "[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5",

        // loader
        "has-[[data-slot=loader]:last-child]:[&_input]:pr-10 has-[[data-slot=loader]:first-child]:[&_input]:pl-10 sm:has-[[data-slot=loader]:last-child]:[&_input]:pr-8 sm:has-[[data-slot=loader]:first-child]:[&_input]:pl-8",
        "*:data-[slot=loader]:pointer-events-none *:data-[slot=loader]:absolute *:data-[slot=loader]:top-3 *:data-[slot=loader]:z-10 *:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:top-2.5 sm:*:data-[slot=loader]:size-4",
        "[&>[data-slot=loader]:first-child]:left-3 sm:[&>[data-slot=loader]:first-child]:left-2.5 [&>[data-slot=loader]:last-child]:right-3 sm:[&>[data-slot=loader]:last-child]:right-2.5",

        // text
        "has-[[data-slot=text]:last-child]:[&_input]:pr-[calc(var(--input-gutter-end)+--spacing(2))] has-[[data-slot=text]:first-child]:[&_input]:pl-[calc(var(--input-gutter-start)+--spacing(2))] sm:has-[[data-slot=text]:last-child]:[&_input]:pr-(--input-gutter-end,--spacing(10)) sm:has-[[data-slot=text]:first-child]:[&_input]:pl-(--input-gutter-start,--spacing(10))",
        "*:data-[slot=text]:absolute *:data-[slot=text]:top-0 *:data-[slot=text]:z-10 *:data-[slot=text]:h-full *:data-[slot=text]:max-w-fit *:data-[slot=text]:grow *:data-[slot=text]:content-center [&>[data-slot='text']:not([class*='pointer-events'])]:pointer-events-none",
        "[&>[data-slot=text]:first-child:not([class*='left-'])]:left-3 sm:[&>[data-slot=text]:first-child:not([class*='left-'])]:left-2.5 [&>[data-slot=text]:last-child:not([class*='right-'])]:right-3 sm:[&>[data-slot=text]:last-child:not([class*='right-'])]:right-2.5",

        // keyboard
        "has-[[data-slot=keyboard]:last-child]:[&_input]:pr-[calc(var(--input-gutter-end)+--spacing(2))] has-[[data-slot=keyboard]:first-child]:[&_input]:pl-[calc(var(--input-gutter-start)+--spacing(2))] sm:has-[[data-slot=keyboard]:last-child]:[&_input]:pr-(--input-gutter-end,--spacing(10)) sm:has-[[data-slot=keyboard]:first-child]:[&_input]:pl-(--input-gutter-start,--spacing(10))",
        "*:data-[slot=keyboard]:absolute *:data-[slot=keyboard]:top-0 *:data-[slot=keyboard]:z-10 *:data-[slot=keyboard]:h-full *:data-[slot=keyboard]:max-w-fit *:data-[slot=keyboard]:grow *:data-[slot=keyboard]:content-center [&>[data-slot='keyboard']:not([class*='pointer-events'])]:pointer-events-none",
        "[&>[data-slot=keyboard]:first-child:not([class*='left-'])]:left-3 sm:[&>[data-slot=keyboard]:first-child:not([class*='left-'])]:left-2.5 [&>[data-slot=keyboard]:last-child:not([class*='right-'])]:right-3 sm:[&>[data-slot=keyboard]:last-child:not([class*='right-'])]:right-2.5",

        // button
        "has-[>button:last-child]:[&_input]:pr-(--input-gutter-end,--spacing(16)) has-[>button:first-child]:[&_input]:pl-(--input-gutter-start,--spacing(16)) sm:has-[>button:last-child]:[&_input]:pr-(--input-gutter-end,--spacing(14)) sm:has-[>button:first-child]:[&_input]:pl-(--input-gutter-start,--spacing(14))",
        "[&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none",
        "[&>button[data-intent=outline]]:border-input *:[button]:absolute *:[button]:top-0 *:[button]:z-10 *:[button]:min-h-11 sm:*:[button]:min-h-9",
        "[&>button:first-child]:left-0 [&>button:last-child]:right-0",

        "[&>[data-slot='icon']:not([class*='text-'])]:text-muted-fg [&>[data-slot='loader']:not([class*='text-'])]:text-muted-fg [&>[data-slot='text']:not([class*='text-'])]:text-muted-fg",
        className,
      )}
      {...props}
    />
  )
}
