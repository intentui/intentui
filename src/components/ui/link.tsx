"use client"

import { composeTailwindRenderProps } from "@/lib/primitive"
import { Link as LinkPrimitive, type LinkProps as LinkPrimitiveProps } from "react-aria-components"
import { twJoin } from "tailwind-merge"

interface LinkProps extends LinkPrimitiveProps {
  intent?: "primary" | "secondary" | "unstyled"
  ref?: React.RefObject<HTMLAnchorElement>
}

const Link = ({ className, ref, intent = "unstyled", ...props }: LinkProps) => {
  return (
    <LinkPrimitive
      ref={ref}
      {...props}
      className={composeTailwindRenderProps(
        className,
        twJoin([
          "outline-0 outline-offset-2 transition-[color,_opacity] focus-visible:outline-2 focus-visible:outline-ring forced-colors:outline-[Highlight]",
          "disabled:cursor-default disabled:opacity-60 forced-colors:disabled:text-[GrayText]",
          intent === "unstyled" && "text-current",
          intent === "primary" && "text-primary hover:text-primary/80",
          intent === "secondary" && "text-muted-fg hover:text-fg",
        ]),
      )}
    >
      {(values) => (
        <>{typeof props.children === "function" ? props.children(values) : props.children}</>
      )}
    </LinkPrimitive>
  )
}

export type { LinkProps }
export { Link }
