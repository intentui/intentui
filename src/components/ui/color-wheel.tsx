"use client"
import {
  ColorWheelTrack,
  ColorWheel as PrimitiveColorWheel,
  type ColorWheelProps as PrimitiveColorWheelProps,
} from "react-aria-components"
import { ColorThumb } from "./color-thumb"

export interface ColorWheelProps
  extends Omit<PrimitiveColorWheelProps, "outerRadius" | "innerRadius"> {}

export function ColorWheel(props: ColorWheelProps) {
  return (
    <PrimitiveColorWheel {...props} outerRadius={100} innerRadius={74}>
      <ColorWheelTrack
        className="disabled:bg-muted-fg forced-colors:disabled:bg-[GrayText]"
        style={({ defaultStyle, isDisabled }) => ({
          ...defaultStyle,
          background: isDisabled
            ? undefined
            : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
        })}
      />
      <ColorThumb />
    </PrimitiveColorWheel>
  )
}
