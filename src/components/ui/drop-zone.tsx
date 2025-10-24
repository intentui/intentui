import type { DropZoneProps } from "react-aria-components"
import { composeRenderProps, DropZone as DropPrimitiveZone } from "react-aria-components"
import { twMerge } from "tailwind-merge"

const DropZone = ({ className, style, ...props }: DropZoneProps) => (
  <DropPrimitiveZone
    className={composeRenderProps(className, (className, { isDropTarget }) =>
      twMerge(
        "group/drop-zone relative z-10 flex max-h-56 items-center justify-center overflow-hidden rounded-lg border border-dashed p-6",
        isDropTarget && "border-primary border-solid bg-primary/10 ring-3 ring-ring/20",
        className,
      ),
    )}
    {...props}
  />
)

export { DropZone }
