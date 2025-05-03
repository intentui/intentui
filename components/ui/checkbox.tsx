"use client"

import { IconCheck, IconMinus } from "@intentui/icons"
import type {
  CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  CheckboxProps as CheckboxPrimitiveProps,
  ValidationResult,
} from "react-aria-components"
import {
  CheckboxGroup as CheckboxGroupPrimitive,
  Checkbox as CheckboxPrimitive,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { twMerge } from "tailwind-merge"
import { Description, FieldError, Label } from "./field"
import { composeTailwindRenderProps } from "./primitive"

interface CheckboxGroupProps extends CheckboxGroupPrimitiveProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const CheckboxGroup = ({ className, children, ...props }: CheckboxGroupProps) => {
  return (
    <CheckboxGroupPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "flex flex-col gap-y-2")}
    >
      {(values) => (
        <>
          {props.label && <Label>{props.label}</Label>}
          {typeof children === "function" ? children(values) : children}
          {props.description && <Description className="block">{props.description}</Description>}
          <FieldError>{props.errorMessage}</FieldError>
        </>
      )}
    </CheckboxGroupPrimitive>
  )
}

const checkboxStyles = tv({
  base: "group flex items-center gap-2 text-sm transition",
  variants: {
    isDisabled: {
      true: "opacity-50",
    },
  },
})

const boxStyles = tv({
  base: "inset-ring inset-ring-fg/10 flex size-4 shrink-0 items-center justify-center rounded text-bg transition *:data-[slot=icon]:size-3",
  variants: {
    isSelected: {
      false: "bg-muted",
      true: [
        "border-primary bg-primary text-primary-fg",
        "group-invalid:border-danger/70 group-invalid:bg-danger group-invalid:text-danger-fg",
      ],
    },
    isFocused: {
      true: [
        "border-primary ring-4 ring-primary/20",
        "group-invalid:border-danger/70 group-invalid:text-danger-fg group-invalid:ring-danger/20",
      ],
    },
    isInvalid: {
      true: "border-danger/70 bg-danger/20 text-danger-fg ring-danger/20",
    },
  },
})

interface CheckboxProps extends CheckboxPrimitiveProps {
  description?: string
  label?: string
}

const Checkbox = ({ className, children, description, label, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className }),
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <div className={twMerge("flex gap-x-2", description ? "items-start" : "items-center")}>
          <div
            className={boxStyles({
              ...renderProps,
              isSelected: isSelected || isIndeterminate,
            })}
          >
            {isIndeterminate ? <IconMinus /> : isSelected ? <IconCheck /> : null}
          </div>

          <div className="flex flex-col gap-1">
            <>
              {label ? (
                <Label className={twMerge(description && "font-normal text-sm/4")}>{label}</Label>
              ) : (
                children
              )}
              {description && <Description>{description}</Description>}
            </>
          </div>
        </div>
      )}
    </CheckboxPrimitive>
  )
}

export type { CheckboxGroupProps, CheckboxProps }
export { Checkbox, CheckboxGroup }
