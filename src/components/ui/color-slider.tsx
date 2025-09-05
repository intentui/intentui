"use client"

import {
  ColorSlider as ColorSliderPrimitive,
  type ColorSliderProps as ColorSliderPrimitiveProps,
  composeRenderProps,
  SliderOutput,
  SliderTrack,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { ColorThumb } from "./color-thumb"
import { Label } from "./field"

interface ColorSliderProps extends ColorSliderPrimitiveProps {
  label?: string
  showOutput?: boolean
}

const ColorSlider = ({ showOutput = true, label, className, ...props }: ColorSliderProps) => {
  return (
    <ColorSliderPrimitive
      {...props}
      data-slot="color-slider"
      className={composeRenderProps(className, (className, { orientation, isDisabled }) =>
        twMerge(
          "group relative",
          orientation === "horizontal" && "grid min-w-56 grid-cols-[1fr_auto]",
          orientation === "vertical" && "flex flex-col items-center justify-center",
          isDisabled && "opacity-50 forced-colors:bg-[GrayText]",
          className,
        ),
      )}
    >
      <div className="flex items-center">
        {label && <Label className="text-sm [grid-area:label]">{label}</Label>}
        {showOutput && (
          <SliderOutput className="text-sm [grid-area:output] data-[orientation=horizontal]:ml-auto" />
        )}
      </div>
      <SliderTrack
        className={twJoin([
          "group col-span-2 rounded-lg",
          "orientation-horizontal:h-6 orientation-horizontal:w-full",
          "orientation-vertical:-translate-x-[50%] orientation-vertical:ml-[50%] orientation-vertical:h-56 orientation-vertical:w-6",
          "disabled:opacity-50 disabled:forced-colors:bg-[GrayText]",
        ])}
        style={({ defaultStyle, isDisabled }) => ({
          ...defaultStyle,
          background: isDisabled
            ? undefined
            : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
        })}
      >
        <ColorThumb />
      </SliderTrack>
    </ColorSliderPrimitive>
  )
}

export type { ColorSliderProps }
export { ColorSlider }
