"use client"

import { TextArea, type TextAreaProps } from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { cx } from "@/lib/primitive"

export function Textarea({ className, ...props }: TextAreaProps) {
  return (
    <span data-slot="control" className="relative block w-full">
      <TextArea
        {...props}
        className={cx(
          twJoin([
            "field-sizing-content relative block min-h-16 w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
            "text-base/6 text-fg placeholder:text-muted-fg sm:text-sm/6",
            "border border-input enabled:hover:border-muted-fg/30",
            "focus:border-ring/70 focus:bg-primary-subtle/5 focus:outline-hidden focus:ring-3 focus:ring-ring/20 focus:enabled:hover:border-ring/80",
            "invalid:border-danger-subtle-fg/70 invalid:bg-danger-subtle/5 focus:invalid:border-danger-subtle-fg/70 focus:invalid:bg-danger-subtle/5 focus:invalid:ring-danger-subtle-fg/20 invalid:enabled:hover:border-danger-subtle-fg/80 invalid:focus:enabled:hover:border-danger-subtle-fg/80",
            "disabled:bg-muted disabled:opacity-50 forced-colors:in-disabled:text-[GrayText]",
            "in-disabled:bg-muted in-disabled:opacity-50 forced-colors:in-disabled:text-[GrayText]",
            "dark:scheme-dark",
          ]),
          className,
        )}
      />
    </span>
  )
}
