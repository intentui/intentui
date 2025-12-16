import type { ColorSliderProps, SliderOutputProps, SliderTrackProps } from "react-aria-components"
import {
  ColorSlider as PrimitiveColorSlider,
  SliderOutput,
  SliderTrack,
} from "react-aria-components"
import { fieldStyles } from "@/components/ui/field"
import { cx } from "@/lib/primitive"

export function ColorSlider({ className, ...props }: ColorSliderProps) {
  return (
    <PrimitiveColorSlider
      data-slot="control"
      className={cx(
        "orientation-vertical:flex orientation-horizontal:grid orientation-horizontal:w-full grid-cols-[1fr_auto] flex-col items-center gap-2",
        fieldStyles(),
        className,
      )}
      {...props}
    />
  )
}

export function ColorSliderOutput({ className, ...props }: SliderOutputProps) {
  return (
    <SliderOutput
      className={cx("orientation-vertical:hidden font-medium text-base/6 sm:text-sm/6", className)}
      {...props}
    />
  )
}

export function ColorSliderTrack({ className, ...props }: SliderTrackProps) {
  return (
    <SliderTrack
      className={cx(
        "group col-span-2 orientation-horizontal:h-6 rounded-lg",
        "orientation-horizontal:h-6 orientation-horizontal:w-full",
        "orientation-vertical:ml-[50%] orientation-vertical:h-56 orientation-vertical:w-6 orientation-vertical:-translate-x-[50%]",
        "bg-muted-fg disabled:opacity-50 forced-colors:bg-[GrayText]",
        className,
      )}
      {...props}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled
          ? undefined
          : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
      })}
    />
  )
}
