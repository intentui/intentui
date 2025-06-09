"use client"
import type { DropZoneProps } from "react-aria-components"
import { DropZone as DropPrimitiveZone, composeRenderProps } from "react-aria-components"
import { tv } from "tailwind-variants"

import { focusStyles } from "@/lib/primitive"

const dropZoneStyles = tv({
  extend: focusStyles,
  base: "group flex max-h-[200px] max-w-xl flex-col items-center justify-center gap-2 rounded-md border border-dashed p-6 text-sm has-[slot=description]:text-center",
  variants: {
    isDropTarget: {
      true: "border-primary border-solid bg-primary/10 ring-4 ring-ring/20 [&_.text-muted-fg]:text-primary-fg",
    },
  },
})

const DropZone = ({ className, ...props }: DropZoneProps) => (
  <DropPrimitiveZone
    className={composeRenderProps(className, (className, renderProps) =>
      dropZoneStyles({ ...renderProps, className }),
    )}
    {...props}
  />
)
export { DropZone }
