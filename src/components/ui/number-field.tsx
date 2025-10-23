import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid"
import {
  Button,
  type ButtonProps,
  NumberField as NumberFieldPrimitive,
  type NumberFieldProps,
} from "react-aria-components"
import { Input, InputGroup } from "@/components/ui/input"
import { cx } from "@/lib/primitive"
import { fieldStyles } from "./field"

const NumberField = ({ className, ...props }: NumberFieldProps) => {
  return (
    <NumberFieldPrimitive {...props} data-slot="control" className={cx(fieldStyles(), className)} />
  )
}

function NumberInput(props: React.ComponentProps<typeof Input>) {
  return (
    <InputGroup className="[--input-gutter-end:--spacing(19)]">
      <Input className="tabular-nums" {...props} />
      <div data-slot="text" className="pointer-events-auto right-0 p-px">
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
        "grid place-content-center pressed:text-fg text-muted-fg hover:text-fg disabled:opacity-50",
        "size-full min-w-11 grow bg-input/20 pressed:bg-input/60 sm:min-w-8.5",
        "*:data-[slot=stepper-icon]:size-5 sm:*:data-[slot=stepper-icon]:size-4",
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
