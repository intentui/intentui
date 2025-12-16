"use client"

import { createContext, use } from "react"
import {
  Meter as PrimitiveMeter,
  type MeterProps as PrimitiveMeterProps,
  type MeterRenderProps as PrimitiveMeterRenderProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"

interface MeterRenderProps extends PrimitiveMeterRenderProps {
  color?: string
}

const MeterContext = createContext<MeterRenderProps | null>(null)

interface MeterProps extends PrimitiveMeterProps, Pick<MeterRenderProps, "color"> {}

export function Meter({ className, children, color, ...props }: MeterProps) {
  return (
    <PrimitiveMeter
      data-slot="meter"
      {...props}
      className={cx(
        "w-full",
        "[&>[data-slot=meter-header]+[data-slot=meter-track]]:mt-2",
        "[&>[data-slot=meter-header]+[data-slot=meter-track]]:mt-2",
        "[&>[data-slot=meter-header]+[slot='description']]:mt-1",
        "[&>[slot='description']+[data-slot=meter-track]]:mt-2",
        "[&>[data-slot=meter-track]+[slot=description]]:mt-2",
        "[&>[data-slot=meter-track]+[slot=errorMessage]]:mt-2",
        "*:data-[slot=meter-header]:font-medium",
        className,
      )}
    >
      {(values) => (
        <MeterContext value={{ ...values, color }}>
          {typeof children === "function" ? children(values) : children}
        </MeterContext>
      )}
    </PrimitiveMeter>
  )
}

export function MeterTrack({ className, ...props }: React.ComponentProps<"div">) {
  const { percentage, color } = use(MeterContext)!
  return (
    <div
      data-slot="meter-track"
      className={twMerge(
        "[--meter-height:--spacing(1.5)]",
        "relative h-(--meter-height) w-full overflow-hidden rounded-full bg-secondary outline outline-transparent -outline-offset-1",
        className,
      )}
      {...props}
    >
      <div
        data-slot="meter-fill"
        className="absolute top-0 left-0 h-full rounded-full transition-[width] duration-200 ease-linear will-change-[width] motion-reduce:transition-none forced-colors:bg-[Highlight]"
        style={{ width: `${percentage}%`, backgroundColor: color ?? getMeterColor(percentage) }}
      />
    </div>
  )
}

export function MeterValue({
  className,
  ...props
}: Omit<React.ComponentProps<"span">, "children">) {
  const { valueText } = use(MeterContext)!
  return (
    <span
      data-slot="meter-value"
      className={twMerge("text-base/6 sm:text-sm/6", className)}
      {...props}
    >
      {valueText}
    </span>
  )
}

export function MeterHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="meter-header"
      className={twMerge("flex items-center justify-between", className)}
      {...props}
    />
  )
}

function getMeterColor(value: number): string {
  if (value < 50) return "var(--color-success)"
  if (value < 80) return "var(--color-warning)"
  return "var(--color-danger)"
}
