"use client"

import { IconCamera, IconFolder, IconPaperclip45 } from "@intentui/icons"
import {
  FileTrigger as FileTriggerPrimitive,
  type FileTriggerProps as FileTriggerPrimitiveProps,
} from "react-aria-components"

import { Button, type buttonStyles } from "@/components/ui/button"
import { Loader } from "@/components/ui/loader"
import type { VariantProps } from "tailwind-variants"

interface FileTriggerProps extends FileTriggerPrimitiveProps, VariantProps<typeof buttonStyles> {
  isDisabled?: boolean
  ref?: React.RefObject<HTMLInputElement>
  className?: string
}

const FileTrigger = ({
  intent = "outline",
  size = "md",
  isCircle = false,
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
        isCircle={isCircle}
      >
        {!props.isPending ? (
          props.defaultCamera ? (
            <IconCamera />
          ) : props.acceptDirectory ? (
            <IconFolder />
          ) : (
            <IconPaperclip45 />
          )
        ) : (
          <Loader />
        )}
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
