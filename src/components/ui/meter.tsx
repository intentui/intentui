"use client"

import { IconCircleExclamation } from "@intentui/icons"
import { motion } from "motion/react"
import {
  Meter as MeterPrimitive,
  type MeterProps as MeterPrimitiveProps,
} from "react-aria-components"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { Label } from "./field"

interface MeterProps extends MeterPrimitiveProps {
  label?: string
}

const Meter = ({ label, className, ...props }: MeterProps) => {
  return (
    <MeterPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "flex min-w-56 flex-col gap-1")}
    >
      {({ percentage, valueText }) => (
        <>
          <div className="flex w-full justify-between gap-2">
            <Label>{label}</Label>
            <span
              className={`text-sm tabular-nums ${percentage >= 80 ? "text-danger" : "text-muted-fg"}`}
            >
              {percentage >= 80 && (
                <IconCircleExclamation
                  aria-label="Alert"
                  className="inline-block size-4 fill-danger/20 align-text-bottom text-danger"
                />
              )}
              {` ${valueText}`}
            </span>
          </div>
          <div className="-outline-offset-1 relative h-2 rounded-full bg-muted outline outline-transparent">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full forced-colors:bg-[Highlight]"
              initial={{ width: "0%", backgroundColor: getColor(0) }}
              animate={{
                width: `${percentage}%`,
                backgroundColor: getColor(percentage),
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </>
      )}
    </MeterPrimitive>
  )
}

const getColor = (percentage: number) => {
  if (percentage < 30) {
    return "var(--primary)"
  }

  if (percentage < 50) {
    return "var(--success)"
  }

  if (percentage < 70) {
    return "#eab308"
  }

  if (percentage < 80) {
    return "var(--warning)"
  }

  return "var(--danger)"
}

export type { MeterProps }
export { Meter }
