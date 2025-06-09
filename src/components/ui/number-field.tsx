"use client"

import { IconChevronDown, IconChevronUp, IconMinus, IconPlus } from "@intentui/icons"
import {
  Button,
  type ButtonProps,
  NumberField as NumberFieldPrimitive,
  type NumberFieldProps as NumberFieldPrimitiveProps,
  type ValidationResult,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Description, FieldError, FieldGroup, Input, Label } from "@/components/ui/field"
import { useMediaQuery } from "@/hooks/use-media-query"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { twMerge } from "tailwind-merge"

const fieldBorderStyles = tv({
  base: "group-focus:border-primary/70 forced-colors:border-[Highlight]",
  variants: {
    isInvalid: {
      true: "group-focus:border-danger/70 forced-colors:border-[Mark]",
    },
    isDisabled: {
      true: "group-focus:border-input/70",
    },
  },
})

interface NumberFieldProps extends NumberFieldPrimitiveProps {
  label?: string
  description?: string
  placeholder?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const NumberField = ({
  label,
  placeholder,
  description,
  className,
  errorMessage,
  ...props
}: NumberFieldProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  return (
    <NumberFieldPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "group flex flex-col gap-y-1.5")}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup
        className={twMerge(
          "overflow-hidden",
          isMobile && "**:[button]:h-10 **:[button]:rounded-none **:[button]:px-2",
        )}
      >
        {(renderProps) => (
          <>
            {isMobile ? <StepperButton className="border-r" slot="decrement" /> : null}
            <Input className="px-13 tabular-nums md:px-2.5" placeholder={placeholder} />
            {!isMobile ? (
              <div
                className={fieldBorderStyles({
                  ...renderProps,
                  className: "grid h-10 place-content-center sm:border-s",
                })}
              >
                <div className="flex h-full flex-col">
                  <StepperButton slot="increment" emblemType="chevron" className="h-5 px-1" />
                  <div
                    className={fieldBorderStyles({
                      ...renderProps,
                      className: "border-input border-b",
                    })}
                  />
                  <StepperButton slot="decrement" emblemType="chevron" className="h-5 px-1" />
                </div>
              </div>
            ) : (
              <StepperButton className="border-l" slot="increment" />
            )}
          </>
        )}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </NumberFieldPrimitive>
  )
}

interface StepperButtonProps extends ButtonProps {
  slot: "increment" | "decrement"
  emblemType?: "chevron" | "default"
  className?: string
}

const StepperButton = ({
  slot,
  className,
  emblemType = "default",
  ...props
}: StepperButtonProps) => {
  const icon =
    emblemType === "chevron" ? (
      slot === "increment" ? (
        <IconChevronUp className="size-5" />
      ) : (
        <IconChevronDown className="size-5" />
      )
    ) : slot === "increment" ? (
      <IconPlus />
    ) : (
      <IconMinus />
    )
  return (
    <Button
      className={composeTailwindRenderProps(
        className,
        "h-10 cursor-default pressed:text-primary-fg text-muted-fg group-disabled:bg-secondary/70 sm:pressed:bg-primary forced-colors:group-disabled:text-[GrayText]",
      )}
      slot={slot}
      {...props}
    >
      {icon}
    </Button>
  )
}

export type { NumberFieldProps }
export { NumberField }
