"use client"

import type { ColorFieldProps } from "react-aria-components"
import { ColorField as ColorFieldPrimitive } from "react-aria-components"
import { cx } from "@/lib/primitive"
import { fieldStyles } from "./field"

export function ColorField({ className, ...props }: ColorFieldProps) {
  return (
    <ColorFieldPrimitive
      {...props}
      aria-label={props["aria-label"] ?? "Color field"}
      data-slot="control"
      className={cx(fieldStyles(), className)}
    />
  )
}
