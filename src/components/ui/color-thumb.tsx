"use client"

import { ColorThumb as ColorThumbPrimitive, type ColorThumbProps } from "react-aria-components"
import { tv } from "tailwind-variants"

const thumbStyles = tv({
  base: "top-[50%] left-[50%] size-6 rounded-full border-2 border-white [box-shadow:0_0_0_1px_black,_inset_0_0_0_1px_black]",
  variants: {
    isFocusVisible: {
      true: "size-8",
    },
    isDragging: {
      true: "bg-gray-700 dark:bg-gray-300 forced-colors:bg-[ButtonBorder]",
    },
    isDisabled: {
      true: "opacity-50 forced-colors:border-[GrayText] forced-colors:bg-[GrayText]",
    },
  },
})

const ColorThumb = (props: ColorThumbProps) => {
  return (
    <ColorThumbPrimitive
      {...props}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        backgroundColor: isDisabled ? undefined : defaultStyle.backgroundColor,
      })}
      className={thumbStyles}
    />
  )
}

export { ColorThumb }
