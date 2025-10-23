import { Keyboard as KeyboardPrimitive } from "react-aria-components"
import { twMerge } from "tailwind-merge"

interface KeyboardProps extends React.ComponentProps<typeof KeyboardPrimitive> {}

const Keyboard = ({ className, ...props }: KeyboardProps) => {
  return (
    <KeyboardPrimitive
      data-slot="keyboard"
      className={twMerge(
        "hidden font-mono text-[0.80rem]/6 text-current/60 group-hover:text-fg group-focus:text-fg group-focus:opacity-90 group-disabled:opacity-50 lg:inline forced-colors:group-focus:text-[HighlightText",
        className,
      )}
      {...props}
    />
  )
}

export type { KeyboardProps }
export { Keyboard }
