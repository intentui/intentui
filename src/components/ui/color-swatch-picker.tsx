"use client"

import type { ColorSwatchPickerItemProps, ColorSwatchPickerProps } from "react-aria-components"
import {
  ColorSwatchPickerItem as ColorSwatchPickerItemPrimitive,
  ColorSwatchPicker as ColorSwatchPickerPrimitive,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import { ColorSwatch } from "./color-swatch"

const ColorSwatchPicker = ({
  children,
  className,
  layout = "grid",
  ...props
}: ColorSwatchPickerProps) => {
  return (
    <ColorSwatchPickerPrimitive layout={layout} className={cx("flex gap-1", className)} {...props}>
      {children}
    </ColorSwatchPickerPrimitive>
  )
}

const ColorSwatchPickerItem = ({ className, children, ...props }: ColorSwatchPickerItemProps) => {
  return (
    <ColorSwatchPickerItemPrimitive
      className={cx(
        "relative overflow-hidden rounded-sm outline-hidden disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {(values) => (
        <>
          {!children ? (
            <>
              <ColorSwatch
                className={twMerge(
                  (values.isSelected || values.isFocused || values.isPressed) && "inset-ring-fg/30",
                  values.isDisabled && "opacity-50",
                )}
              />
              {(values.isSelected || values.isFocused || values.isPressed) && (
                <span aria-hidden className="absolute right-1 bottom-1 size-1 rounded-full bg-fg" />
              )}
            </>
          ) : typeof children === "function" ? (
            children(values)
          ) : (
            children
          )}
        </>
      )}
    </ColorSwatchPickerItemPrimitive>
  )
}

ColorSwatchPicker.Item = ColorSwatchPickerItem

export { ColorSwatchPicker, ColorSwatchPickerItem }
