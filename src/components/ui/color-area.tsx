"use client"
import type { ColorAreaProps } from "react-aria-components"
import { ColorArea as ColorAreaPrimitive } from "react-aria-components"

import { ColorThumb } from "@/components/ui/color-thumb"
import { composeTailwindRenderProps } from "@/lib/primitive"

const ColorArea = ({ className, ...props }: ColorAreaProps) => {
  return (
    <ColorAreaPrimitive
      {...props}
      data-slot="color-area"
      className={composeTailwindRenderProps(
        className,
        "size-56 shrink-0 rounded-md bg-muted forced-colors:bg-[GrayText]",
      )}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background,
      })}
    >
      <ColorThumb />
    </ColorAreaPrimitive>
  )
}

export { ColorArea }
