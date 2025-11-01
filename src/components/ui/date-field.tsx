import type { DateFieldProps, DateInputProps, DateValue } from "react-aria-components"

import {
  DateField as DateFieldPrimitive,
  DateInput as DateInputPrimitive,
  DateSegment,
} from "react-aria-components"
import { twJoin } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { fieldStyles } from "./field"

export function DateField<T extends DateValue>({ className, ...props }: DateFieldProps<T>) {
  return (
    <DateFieldPrimitive
      {...props}
      data-slot="control"
      className={cx(fieldStyles({ className: "w-fit" }), className)}
    />
  )
}

export function DateInput({ className, ...props }: Omit<DateInputProps, "children">) {
  return (
    <span data-slot="control" className="relative block">
      <DateInputPrimitive
        className={cx(
          "relative block appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
          "text-base/6 text-fg placeholder:text-muted-fg sm:text-sm/6",
          "border border-input enabled:hover:border-muted-fg/30",
          "focus-within:border-ring/70 focus-within:bg-primary-subtle/5 focus-within:outline-hidden focus-within:ring-3 focus-within:ring-ring/20 focus-within:hover:border-ring/80",
          "group-open:border-ring/70 group-open:bg-primary-subtle/5 group-open:outline-hidden group-open:ring-3 group-open:ring-ring/20 group-open:enabled:hover:border-ring/80",
          "invalid:border-danger-subtle-fg/70 invalid:bg-danger-subtle/5 focus-within:invalid:border-danger-subtle-fg/70 focus-within:invalid:bg-danger-subtle/5 focus-within:invalid:ring-danger-subtle-fg/20 focus-within:invalid:hover:border-danger-subtle-fg/80 invalid:enabled:hover:border-danger-subtle-fg/80",
          "disabled:bg-muted disabled:opacity-50 forced-colors:disabled:text-[GrayText]",
          "in-disabled:bg-muted in-disabled:opacity-50 forced-colors:in-disabled:text-[GrayText]",
          "dark:scheme-dark",
          className,
        )}
        {...props}
      >
        {(segment) => (
          <DateSegment
            segment={segment}
            className={twJoin(
              "inline shrink-0 rounded px-1 type-literal:px-0 text-fg tracking-wider caret-transparent outline-0 data-placeholder:not-data-focused:text-muted-fg sm:p-0.5 sm:px-1.5 sm:py-0.5 sm:text-sm",
              "focus:bg-primary-subtle focus:text-primary-subtle-fg focus:data-invalid:bg-danger-subtle focus:data-invalid:text-danger-subtle-fg forced-colors:focus:bg-[Highlight] forced-colors:focus:text-[HighlightText]",
              "forced-color-adjust-none forced-colors:text-[ButtonText]",
              "disabled:opacity-50 forced-colors:disabled:text-[GrayText]",
              "in-disabled:bg-muted in-disabled:opacity-50",
            )}
          />
        )}
      </DateInputPrimitive>
    </span>
  )
}
