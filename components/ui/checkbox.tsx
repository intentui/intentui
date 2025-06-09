"use client"

import * as React from "react"

import { cn } from "@/utils/classes"
import { IconCheck, IconMinus } from "@intentui/icons"
import {
  Checkbox as CheckboxPrimitive,
  CheckboxGroup as CheckboxGroupPrimitive,
  type CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  type CheckboxProps as CheckboxPrimitiveProps,
  composeRenderProps,
  type ValidationResult
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Description, FieldError, Label } from "./field"
import { ctr } from "./primitive"

interface CheckboxGroupProps extends CheckboxGroupPrimitiveProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  return (
    <CheckboxGroupPrimitive {...props} className={ctr(props.className, "flex flex-col gap-y-2")}>
      <Label>{props.label}</Label>
      <>{props.children as React.ReactNode}</>
      {props.description && <Description className="block">{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </CheckboxGroupPrimitive>
  )
}

const checkboxStyles = tv({
  base: "racc group flex items-center gap-2 text-sm transition",
  variants: {
    isDisabled: {
      false: "opacity-100",
      true: "opacity-50"
    }
  }
})

const boxStyles = tv({
  base: "flex size-4 [&>[data-slot=icon]]:size-3 flex-shrink-0 items-center justify-center rounded border text-bg transition",
  variants: {
    isSelected: {
      false: "border-toggle bg-secondary",
      true: [
        "border-primary/70 bg-primary text-primary-fg",
        "group-invalid:border-danger/70 group-invalid:bg-danger group-invalid:text-danger-fg"
      ]
    },
    isFocused: {
      true: [
        "border-primary/70 ring-4 ring-primary/20",
        "group-invalid:border-danger/70 group-invalid:text-danger-fg group-invalid:ring-danger/20"
      ]
    },
    isInvalid: {
      true: "border-danger/70 bg-danger/20 text-danger-fg ring-danger/20"
    }
  }
})

interface CheckboxProps extends CheckboxPrimitiveProps {
  description?: string
  label?: string
}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className })
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <div className={cn("flex gap-x-2", props.description ? "items-start" : "items-center")}>
          <div
            className={boxStyles({
              ...renderProps,
              isSelected: isSelected || isIndeterminate,
              className: props.description ? "mt-1" : "mt-px"
            })}
          >
            {isIndeterminate ? <IconMinus /> : isSelected ? <IconCheck /> : null}
          </div>

          <div className="flex flex-col gap-1">
            <>
              {props.label ? <Label>{props.label}</Label> : (props.children as React.ReactNode)}
              {props.description && <Description>{props.description}</Description>}
            </>
          </div>
        </div>
      )}
    </CheckboxPrimitive>
  )
}

export { Checkbox, CheckboxGroup }
