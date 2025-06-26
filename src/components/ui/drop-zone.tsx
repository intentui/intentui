"use client"
import type { DropZoneProps } from "react-aria-components"
import { DropZone as DropPrimitiveZone, composeRenderProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

const DropZone = ({ className, ...props }: DropZoneProps) => (
  <DropPrimitiveZone
    className={composeRenderProps(className, (className, { isDropTarget }) =>
      twMerge(
        "group flex max-h-[200px] max-w-xl flex-col items-center justify-center gap-2 rounded-md border border-dashed p-6 text-sm has-[[slot=description]]:text-center",
        isDropTarget &&
          "border-primary border-solid bg-primary/10 ring-3 ring-ring/20 [&_.text-muted-fg]:text-primary-fg",
        className,
      ),
    )}
    {...props}
  />
)
export { DropZone }
