"use client"

import {
  ColorThumb as ColorThumbPrimitive,
  type ColorThumbProps,
  composeRenderProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"

const ColorThumb = ({ className, ...props }: ColorThumbProps) => {
  return (
    <ColorThumbPrimitive
      {...props}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        backgroundColor: isDisabled ? undefined : defaultStyle.backgroundColor,
      })}
      className={composeRenderProps(
        className,
        (className, { isFocusVisible, isDragging, isDisabled }) =>
          twMerge(
            "top-[50%] left-[50%] size-6 rounded-full border-2 border-white [box-shadow:0_0_0_1px_black,_inset_0_0_0_1px_black]",
            isFocusVisible && "size-8",
            isDragging && "bg-muted-fg forced-colors:bg-[ButtonBorder]",
            isDisabled && "opacity-50 forced-colors:border-[GrayText] forced-colors:bg-[GrayText]",
            className,
          ),
      )}
    />
  )
}

export { ColorThumb }
