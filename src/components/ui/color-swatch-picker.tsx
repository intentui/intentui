import type { ColorSwatchPickerItemProps, ColorSwatchPickerProps } from "react-aria-components"
import {
  ColorSwatchPicker as PrimitiveColorSwatchPicker,
  ColorSwatchPickerItem as PrimitiveColorSwatchPickerItem,
} from "react-aria-components"
import { cx } from "@/lib/primitive"

export function ColorSwatchPicker({ className, ...props }: ColorSwatchPickerProps) {
  return <PrimitiveColorSwatchPicker className={cx("flex flex-wrap gap-6", className)} {...props} />
}

export function ColorSwatchPickerItem({
  children,
  className,
  ...props
}: ColorSwatchPickerItemProps) {
  return (
    <PrimitiveColorSwatchPickerItem
      style={({ defaultStyle }) => ({
        ...defaultStyle,
        "--tw-ring-color": props.color
          ? `color-mix(in oklab, ${props.color} 40%, transparent)`
          : undefined,
      })}
      className={cx(
        "relative rounded-lg outline-hidden *:rounded-[calc(var(--radius-lg)-1px)]",
        "selected:ring-3 selected:ring-ring/20 selected:*:inset-ring-current/40",
        "focus-visible:opacity-80 focus-visible:ring-ring/20 focus-visible:*:inset-ring-current/40",
        "hover:opacity-90",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {(values) => (
        <>
          {values.isSelected && (
            <span
              className="pointer-events-none absolute bottom-1.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-current/50"
              aria-hidden
            />
          )}
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </PrimitiveColorSwatchPickerItem>
  )
}
