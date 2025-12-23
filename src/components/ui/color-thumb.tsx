import { ColorThumb as ColorThumbPrimitive, type ColorThumbProps } from "react-aria-components"
import { cx } from "@/lib/primitive"

export function ColorThumb({ className, ...props }: ColorThumbProps) {
  return (
    <ColorThumbPrimitive
      {...props}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        backgroundColor: isDisabled ? undefined : defaultStyle.backgroundColor,
      })}
      className={cx(
        "top-[50%] left-[50%] size-6 rounded-full border-2 border-white [box-shadow:0_0_0_1px_black,inset_0_0_0_1px_black]",
        "focus-visible:size-8",
        "dragging:bg-muted-fg dragging:forced-colors:bg-[ButtonBorder]",
        "disabled:opacity-50 disabled:forced-colors:border-[GrayText] disabled:forced-colors:bg-[GrayText]",
        className,
      )}
    />
  )
}
