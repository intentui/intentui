import type { ColorSwatchProps } from "react-aria-components"
import { ColorSwatch as ColorSwatchPrimitive } from "react-aria-components"
import { cx } from "@/lib/primitive"

export function ColorSwatch({ className, ...props }: ColorSwatchProps) {
  return (
    <ColorSwatchPrimitive
      data-slot="color-swatch"
      className={cx(
        "inset-ring-1 inset-ring-current/20 size-[calc(var(--color-swatch-size)+--spacing(1))] shrink-0 rounded-[calc(var(--radius-md)-1px)] [--color-swatch-size:--spacing(9)] sm:size-(--color-swatch-size)",
        className,
      )}
      {...props}
    />
  )
}
