"use client"

import React from "react"

import { IconCamera, IconFolder, IconPaperclip } from "@intentui/icons"
import {
  FileTrigger as FileTriggerPrimitive,
  type FileTriggerProps as FileTriggerPrimitiveProps
} from "react-aria-components"

import { Button } from "./button"

interface FileTriggerProps extends FileTriggerPrimitiveProps {
  withIcon?: boolean
  isDisabled?: boolean
  intent?: "primary" | "secondary" | "danger" | "warning"
  size?: "medium" | "large" | "square-petite" | "extra-small" | "small"
  shape?: "square" | "circle"
  appearance?: "solid" | "outline" | "plain"
}

const FileTrigger = ({
  intent = "primary",
  appearance = "outline",
  size = "medium",
  shape = "square",
  withIcon = true,
  ...props
}: FileTriggerProps) => {
  return (
    <>
      <FileTriggerPrimitive {...props}>
        <Button
          isDisabled={props.isDisabled}
          intent={intent}
          size={size}
          shape={shape}
          appearance={appearance}
        >
          {withIcon && (
            <>
              {props.defaultCamera ? (
                <IconCamera />
              ) : props.acceptDirectory ? (
                <IconFolder />
              ) : (
                <IconPaperclip className="rotate-45" />
              )}
            </>
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
    </>
  )
}

export { FileTrigger }
