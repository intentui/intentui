"use client"

import { IconCamera, IconFolder, IconPaperclip45 } from "@intentui/icons"
import {
  FileTrigger as FileTriggerPrimitive,
  type FileTriggerProps as FileTriggerPrimitiveProps,
} from "react-aria-components"

import { Button, type buttonStyles } from "@/components/ui/button"
import type { VariantProps } from "tailwind-variants"

interface FileTriggerProps extends FileTriggerPrimitiveProps, VariantProps<typeof buttonStyles> {
  withIcon?: boolean
  isDisabled?: boolean
  ref?: React.RefObject<HTMLInputElement>
  className?: string
}

const FileTrigger = ({
  intent = "outline",
  size = "medium",
  shape = "square",
  withIcon = true,
  ref,
  className,
  ...props
}: FileTriggerProps) => {
  return (
    <FileTriggerPrimitive ref={ref} {...props}>
      <Button
        className={className}
        isDisabled={props.isDisabled}
        intent={intent}
        size={size}
        shape={shape}
      >
        {withIcon &&
          (props.defaultCamera ? (
            <IconCamera />
          ) : props.acceptDirectory ? (
            <IconFolder />
          ) : (
            <IconPaperclip45 />
          ))}
        {props.children ? (
          props.children
        ) : (
          <>
            {props.allowsMultiple
              ? "Browse a files"
              : props.acceptDirectory
                ? "Browse"
                : "Browse a file"}
            ...
          </>
        )}
      </Button>
    </FileTriggerPrimitive>
  )
}

export type { FileTriggerProps }
export { FileTrigger }
