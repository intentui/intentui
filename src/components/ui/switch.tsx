"use client"

import {
  Switch as SwitchPrimitive,
  type SwitchProps as SwitchPrimitiveProps,
} from "react-aria-components"

import { composeTailwindRenderProps } from "@/lib/primitive"

interface SwitchProps extends SwitchPrimitiveProps {
  ref?: React.RefObject<HTMLLabelElement>
}
const Switch = ({ children, className, ref, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive
      ref={ref}
      {...props}
      className={composeTailwindRenderProps(
        className,
        "group inline-flex touch-none items-center sm:text-sm",
      )}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {(values) => (
        <>
          <span className="mr-2 h-5 w-8 cursor-default rounded-full border-2 border-transparent bg-(--switch) transition duration-200 [--switch:color-mix(in_oklab,var(--color-muted)_90%,black_10%)] group-invalid:ring-danger/20 group-focus:ring-4 group-focus:ring-ring/20 group-disabled:cursor-default group-disabled:opacity-50 group-selected:bg-primary dark:[--switch:color-mix(in_oklab,var(--color-muted)_85%,white_15%)]">
            <span className="block size-4 origin-right rounded-full bg-primary-fg shadow-sm transition-all duration-200 group-selected:ml-3 group-pressed:w-5 group-selected:group-data-[pressed]:ml-2 forced-colors:disabled:outline-[GrayText]" />
          </span>
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </SwitchPrimitive>
  )
}

export type { SwitchProps }
export { Switch }
