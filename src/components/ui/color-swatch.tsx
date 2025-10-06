"use client"

import { parseColor } from "@react-stately/color"
import type { ColorSwatchProps } from "react-aria-components"
import { ColorSwatch as ColorSwatchPrimitive } from "react-aria-components"
import { cx } from "@/lib/primitive"

const defaultColor = parseColor("hsl(216, 98%, 52%)")

const ColorSwatch = ({ className, ...props }: ColorSwatchProps) => {
  return (
    <ColorSwatchPrimitive
      data-slot="color-swatch"
      aria-label={props["aria-label"] ?? "Color swatch"}
      className={cx("inset-ring-1 inset-ring-fg/10 size-8 shrink-0 rounded-sm", className)}
      {...props}
    />
  )
}

export { ColorSwatch, defaultColor }
