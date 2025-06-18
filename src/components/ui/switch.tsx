"use client"

import {
  Switch as SwitchPrimitive,
  type SwitchProps as SwitchPrimitiveProps,
} from "react-aria-components"

import { Description, type FieldProps, Label } from "@/components/ui/field"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { twMerge } from "tailwind-merge"

interface SwitchProps extends SwitchPrimitiveProps, Pick<FieldProps, "description" | "label"> {
  ref?: React.RefObject<HTMLLabelElement>
}
const Switch = ({ children, label, description, className, ref, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive
      ref={ref}
      {...props}
      className={composeTailwindRenderProps(className, "group disabled:opacity-50")}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {(values) => (
        <div
          className={twMerge(
            "relative grid grid-cols-[2rem_1fr] gap-x-3 gap-y-1 sm:grid-cols-[2rem_1fr]",
            // "*:data-[slot=indicator]:col-start-1 *:data-[slot=indicator]:row-start-1 *:data-[slot=indicator]:mt-0.75 sm:*:data-[slot=indicator]:mt-1",
            "*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1",
            "*:[[slot=description]]:col-start-2 *:[[slot=description]]:row-start-2",
            "has-[[slot=description]]:**:data-[slot=label]:font-medium",
          )}
        >
          <span
            data-slot="indicator"
            className="absolute mt-0.5 h-5 w-8 cursor-default rounded-full border-2 border-transparent bg-(--switch) transition duration-200 [--switch:color-mix(in_oklab,var(--color-muted)_90%,black_10%)] group-invalid:ring-danger/20 group-focus:ring-3 group-focus:ring-ring/20 group-disabled:cursor-default group-disabled:opacity-50 group-selected:bg-primary dark:[--switch:color-mix(in_oklab,var(--color-muted)_85%,white_15%)]"
          >
            <span className="block size-4 origin-right rounded-full bg-primary-fg shadow-sm transition-all duration-200 group-selected:group-pressed:ml-2 group-selected:ml-3 group-pressed:w-5 forced-colors:disabled:outline-[GrayText]" />
          </span>
          {label && <Label>{label}</Label>}
          {description && <Description>{description}</Description>}
          {typeof children === "function" ? (
            children(values)
          ) : typeof children === "string" ? (
            <Label>{children}</Label>
          ) : (
            children
          )}
        </div>
      )}
    </SwitchPrimitive>
  )
}

export type { SwitchProps }
export { Switch }
