"use client"

import type { RadioGroupProps, RadioProps } from "react-aria-components"
import {
  composeRenderProps,
  RadioGroup as RadioGroupPrimitive,
  Radio as RadioPrimitive,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { Label } from "./field"

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive
      {...props}
      data-slot="control"
      className={cx(
        "space-y-3 **:data-[slot=label]:font-normal",
        "has-[slot=description]:space-y-6 has-[[slot=description]]:**:data-[slot=label]:font-medium",
        className,
      )}
    />
  )
}

export function Radio({ className, children, ...props }: RadioProps) {
  return (
    <RadioPrimitive {...props} className={cx("group block disabled:opacity-50", className)}>
      {composeRenderProps(children, (children, { isSelected, isFocusVisible, isInvalid }) => {
        const isStringChild = typeof children === "string"
        const content = isStringChild ? <RadioLabel>{children}</RadioLabel> : children

        return (
          <div
            className={twMerge(
              "grid grid-cols-[1.125rem_1fr] gap-x-3 gap-y-1 sm:grid-cols-[1rem_1fr]",
              "*:data-[slot=indicator]:col-start-1 *:data-[slot=indicator]:row-start-1 *:data-[slot=indicator]:mt-0.75 sm:*:data-[slot=indicator]:mt-1",
              "*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1",
              "*:[[slot=description]]:col-start-2 *:[[slot=description]]:row-start-2",
              "has-[[slot=description]]:**:data-[slot=label]:font-medium",
            )}
          >
            <span
              data-slot="indicator"
              className={twMerge([
                "relative inset-ring inset-ring-input isolate flex size-4.5 shrink-0 items-center justify-center rounded-full text-bg transition before:absolute before:inset-auto before:size-2 before:shrink-0 before:rounded-full before:content-[''] hover:before:bg-muted-fg/20 sm:size-4 sm:before:size-1.7",
                "in-disabled:bg-muted",
                isSelected && [
                  "inset-ring-(--radio-ring,var(--color-ring)) bg-(--radio-bg,var(--color-primary)) text-(--radio-fg,var(--color-primary-fg)) before:bg-bg hover:before:bg-muted/90",
                  "group-invalid:inset-ring-danger-subtle-fg/70 group-invalid:bg-danger group-invalid:text-danger-fg",
                ],
                isFocusVisible && [
                  "inset-ring-(--radio-ring,var(--color-ring)) ring-(--radio-ring,var(--color-ring))/20 ring-3",
                  "group-invalid:inset-ring-danger-subtle-fg/70 group-invalid:text-danger-fg group-invalid:ring-danger-subtle-fg/20",
                ],
                isInvalid &&
                  "inset-ring-danger-subtle-fg/70 bg-danger-subtle/5 text-danger-fg ring-danger-subtle-fg/20",
              ])}
            />
            {content}
          </div>
        )
      })}
    </RadioPrimitive>
  )
}

export function RadioLabel(props: React.ComponentProps<typeof Label>) {
  return <Label elementType="span" data-slot="control-label" {...props} />
}
