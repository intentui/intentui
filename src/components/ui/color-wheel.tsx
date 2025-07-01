"use client"

import {
  ColorWheel as ColorWheelPrimitive,
  type ColorWheelProps as ColorWheelPrimitiveProps,
  ColorWheelTrack,
} from "react-aria-components"

import { ColorThumb } from "./color-thumb"

type ColorWheelProps = Omit<ColorWheelPrimitiveProps, "outerRadius" | "innerRadius">

const ColorWheel = (props: ColorWheelProps) => {
  return (
    <ColorWheelPrimitive {...props} outerRadius={100} innerRadius={74}>
      <ColorWheelTrack
        className="disabled:bg-muted/75 forced-colors:disabled:bg-[GrayText]"
        style={({ defaultStyle, isDisabled }) => ({
          ...defaultStyle,
          background: isDisabled
            ? undefined
            : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
        })}
      />
      <ColorThumb />
    </ColorWheelPrimitive>
  )
}

export type { ColorWheelProps }
export { ColorWheel }
