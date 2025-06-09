"use client"

import { composeTailwindRenderProps } from "@/lib/primitive"
import { parseColor } from "@react-stately/color"
import type { ColorSwatchProps } from "react-aria-components"
import { ColorSwatch as ColorSwatchPrimitive } from "react-aria-components"

const defaultColor = parseColor("hsl(216, 98%, 52%)")

const ColorSwatch = ({ className, ...props }: ColorSwatchProps) => {
  return (
    <ColorSwatchPrimitive
      data-slot="color-swatch"
      aria-label={props["aria-label"] ?? "Color swatch"}
      className={composeTailwindRenderProps(
        className,
        "inset-ring-1 inset-ring-fg/10 size-8 shrink-0 rounded-md",
      )}
      {...props}
    />
  )
}

export { ColorSwatch, defaultColor }
