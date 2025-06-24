"use client"

import { IconCheck, IconMinus } from "@intentui/icons"
import type {
  CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  CheckboxProps as CheckboxPrimitiveProps,
} from "react-aria-components"
import {
  CheckboxGroup as CheckboxGroupPrimitive,
  Checkbox as CheckboxPrimitive,
  composeRenderProps,
} from "react-aria-components"

import { Description, FieldError, type FieldProps, Label } from "@/components/ui/field"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { twMerge } from "tailwind-merge"

interface CheckboxGroupProps extends CheckboxGroupPrimitiveProps, Omit<FieldProps, "placeholder"> {}

const CheckboxGroup = ({ className, children, ...props }: CheckboxGroupProps) => {
  return (
    <CheckboxGroupPrimitive
      {...props}
      className={composeTailwindRenderProps(
        className,
        "space-y-3 has-[[slot=description]]:space-y-6 has-[[slot=description]]:**:data-[slot=label]:font-medium **:[[slot=description]]:block",
      )}
    >
      {(values) => (
        <>
          {props.label && <Label>{props.label}</Label>}
          {props.description && <Description>{props.description}</Description>}
          {typeof children === "function" ? children(values) : children}
          <FieldError>{props.errorMessage}</FieldError>
        </>
      )}
    </CheckboxGroupPrimitive>
  )
}

interface CheckboxProps extends CheckboxPrimitiveProps, Pick<FieldProps, "label" | "description"> {}

const Checkbox = ({ className, children, description, label, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "group block disabled:opacity-50")}
    >
      {composeRenderProps(
        children,
        (children, { isSelected, isIndeterminate, isFocusVisible, isInvalid }) => {
          const isStringChild = typeof children === "string"
          const hasCustomChildren = typeof children !== "undefined"

          const indicator = isIndeterminate ? (
            <IconMinus data-slot="check-indicator" />
          ) : isSelected ? (
            <IconCheck data-slot="check-indicator" />
          ) : null

          const content = hasCustomChildren ? (
            isStringChild ? (
              <Label>{children}</Label>
            ) : (
              children
            )
          ) : (
            <>
              {label && <Label>{label}</Label>}
              {description && <Description>{description}</Description>}
            </>
          )

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
                  "relative inset-ring inset-ring-fg/10 isolate flex shrink-0 items-center justify-center rounded bg-muted text-bg transition",
                  "sm:size-4 sm:*:data-[slot=check-indicator]:size-3.5",
                  "size-4.5 *:data-[slot=check-indicator]:size-4",
                  (isSelected || isIndeterminate) && [
                    "bg-primary text-primary-fg dark:inset-ring-primary",
                    "group-invalid:inset-ring-danger/70 group-invalid:bg-danger group-invalid:text-danger-fg",
                  ],
                  isFocusVisible && [
                    "inset-ring-primary ring-3 ring-ring/20",
                    "group-invalid:inset-ring-danger/70 group-invalid:text-danger-fg group-invalid:ring-danger/20",
                  ],
                  isInvalid && "inset-ring-danger/70 bg-danger/20 text-danger-fg ring-danger/20",
                ])}
              >
                {indicator}
              </span>
              {content}
            </div>
          )
        },
      )}
    </CheckboxPrimitive>
  )
}

export type { CheckboxGroupProps, CheckboxProps }
export { CheckboxGroup, Checkbox }
