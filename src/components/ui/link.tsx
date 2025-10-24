"use client"

import { Link as LinkPrimitive, type LinkProps as LinkPrimitiveProps } from "react-aria-components"
import { cx } from "@/lib/primitive"

interface LinkProps extends LinkPrimitiveProps {
  ref?: React.RefObject<HTMLAnchorElement>
}

const Link = ({ className, ref, ...props }: LinkProps) => {
  return (
    <LinkPrimitive
      ref={ref}
      className={cx(
        [
          "font-medium text-(--text)",
          "outline-0 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring forced-colors:outline-[Highlight]",
          "disabled:cursor-default disabled:text-muted-fg forced-colors:disabled:text-[GrayText]",
          "href" in props && "cursor-pointer",
        ],
        className,
      )}
      {...props}
    />
  )
}

export type { LinkProps }
export { Link }
