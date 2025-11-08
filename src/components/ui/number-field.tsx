import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid"
import type { ButtonProps, InputProps, NumberFieldProps } from "react-aria-components"
import { Button, NumberField as NumberFieldPrimitive } from "react-aria-components"
import { Input, InputGroup } from "@/components/ui/input"
import { cx } from "@/lib/primitive"
import { fieldStyles } from "./field"

const NumberField = ({ className, ...props }: NumberFieldProps) => {
  return (
    <NumberFieldPrimitive {...props} data-slot="control" className={cx(fieldStyles(), className)} />
  )
}

function NumberInput({ className, ...props }: InputProps) {
  return (
    <InputGroup className="[--input-gutter-end:--spacing(20)]">
      <Input className={cx("tabular-nums", className)} {...props} />
      <div
        data-slot="text"
        className="in-disabled:pointer-events-none pointer-events-auto right-0 p-px in-disabled:opacity-50"
      >
        <div className="flex h-full items-center divide-x overflow-hidden rounded-r-[calc(var(--radius-lg)-1px)] border-l">
          <StepperButton slot="decrement" />
          <StepperButton slot="increment" />
        </div>
      </div>
    </InputGroup>
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
  return (
    <Button
      className={cx(
        "inline-grid place-content-center pressed:text-fg text-muted-fg enabled:hover:text-fg",
        "size-full min-w-11 grow bg-input/20 pressed:bg-input/60 sm:min-w-8.5",
        "*:data-[slot=stepper-icon]:size-5 sm:*:data-[slot=stepper-icon]:size-4",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      slot={slot}
      {...props}
    >
      {slot === "increment" ? (
        <PlusIcon data-slot="stepper-icon" />
      ) : (
        <MinusIcon data-slot="stepper-icon" />
      )}
    </Button>
  )
}

export type { NumberFieldProps }
export { NumberInput, NumberField }
