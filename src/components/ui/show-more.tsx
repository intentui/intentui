"use client"

import { composeRenderProps, ToggleButton } from "react-aria-components"
import { tv } from "tailwind-variants"
import { buttonStyles } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

const showMoreStyles = tv({
  base: "text-sm leading-6 before:border-border after:border-border",
  variants: {
    orientation: {
      vertical: "mx-1 h-auto self-stretch",
      horizontal: "my-0.5 h-px w-full self-stretch",
    },
  },
  compoundVariants: [
    {
      orientation: "vertical",
      className:
        "mx-2 flex flex-col items-center before:mb-2 before:flex-1 before:border-l after:mt-2 after:flex-1 after:border-r",
    },
    {
      orientation: "horizontal",
      className:
        "my-2 flex items-center self-stretch before:me-2 before:flex-1 before:border-t after:ms-2 after:flex-1 after:border-t",
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
  },
})

interface ShowMoreProps extends Omit<React.ComponentProps<typeof ToggleButton>, "className"> {
  className?: string
  orientation?: "horizontal" | "vertical"
  as?: "text" | "button"
  text?: string
}

const ShowMore = ({
  as = "button",
  orientation = "horizontal",
  className,
  ...props
}: ShowMoreProps) => {
  return (
    <div className={showMoreStyles({ orientation, className })}>
      {as === "button" ? (
        <ToggleButton
          {...props}
          className={buttonStyles({ isCircle: true, intent: "outline", size: "sm" })}
        >
          {composeRenderProps(props.children, (children) => children)}
        </ToggleButton>
      ) : (
        <Text>{props.text}</Text>
      )}
    </div>
  )
}

export type { ShowMoreProps }
export { ShowMore }
