"use client"

import type {
  RadioGroupProps as RadioGroupPrimitiveProps,
  RadioProps as RadioPrimitiveProps,
  ValidationResult,
} from "react-aria-components"
import { RadioGroup as RadioGroupPrimitive, Radio as RadioPrimitive } from "react-aria-components"
import { tv } from "tailwind-variants"

import { Description, FieldError, Label } from "@/components/ui/field"
import { composeTailwindRenderProps } from "@/lib/primitive"

interface RadioGroupProps extends Omit<RadioGroupPrimitiveProps, "children"> {
  label?: string
  children?: React.ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  ref?: React.Ref<HTMLDivElement>
}

const RadioGroup = ({
  label,
  description,
  errorMessage,
  children,
  ref,
  ...props
}: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive
      ref={ref}
      {...props}
      className={composeTailwindRenderProps(props.className, "group flex flex-col gap-2")}
    >
      {label && <Label>{label}</Label>}
      <div className="flex select-none gap-2 group-data-[orientation=vertical]:flex-col group-data-[orientation=horizontal]:flex-wrap group-data-[orientation=horizontal]:gap-2 sm:group-data-[orientation=horizontal]:gap-4">
        {children}
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RadioGroupPrimitive>
  )
}

const radioStyles = tv({
  base: "size-4 shrink-0 rounded-full border bg-muted transition",
  variants: {
    isSelected: {
      false: "border-input",
      true: "border-[4.5px] border-primary",
    },
    isFocused: {
      true: [
        "border-ring bg-primary/20 ring-4 ring-ring/20",
        "group-invalid:border-danger/70 group-invalid:bg-danger/20 group-invalid:ring-danger/20",
      ],
    },
    isInvalid: {
      true: "border-danger/70 bg-danger/20",
    },
    isDisabled: {
      true: "opacity-50",
    },
  },
})

interface RadioProps extends RadioPrimitiveProps {
  description?: string
  label?: string
  ref?: React.Ref<HTMLLabelElement>
}

const Radio = ({ description, label, ref, className, ...props }: RadioProps) => {
  return (
    <RadioPrimitive
      ref={ref}
      className={composeTailwindRenderProps(
        className,
        "group flex items-center gap-2 text-fg text-sm transition disabled:text-fg/50 forced-colors:disabled:text-[GrayText]",
      )}
      {...props}
    >
      {(renderProps) => (
        <div className="flex gap-2">
          <div
            className={radioStyles({
              ...renderProps,
              className: "description" in props ? "mt-1" : "mt-0.5",
            })}
          />
          <div className="flex flex-col gap-1">
            {label || description ? (
              <>
                {label && <Label>{label}</Label>}
                {description && <Description className="block">{description}</Description>}
              </>
            ) : (
              (props.children as React.ReactNode)
            )}
          </div>
        </div>
      )}
    </RadioPrimitive>
  )
}

export type { RadioGroupProps, RadioProps }
export { Radio, RadioGroup }
