"use client"

import { IconEye, IconEyeClosed } from "@intentui/icons"
import { useState } from "react"
import type { InputProps, TextFieldProps as TextFieldPrimitiveProps } from "react-aria-components"
import { TextField as TextFieldPrimitive } from "react-aria-components"
import { composeTailwindRenderProps } from "@/lib/primitive"
import type { FieldProps } from "./field"
import { Description, FieldError, FieldGroup, Input, Label } from "./field"
import { Loader } from "./loader"

type InputType = Exclude<InputProps["type"], "password">

interface BaseTextFieldProps extends TextFieldPrimitiveProps, FieldProps {
  prefix?: React.ReactNode | string
  suffix?: React.ReactNode | string
  isPending?: boolean
}

type TextFieldProps =
  | (BaseTextFieldProps & { isRevealable: true; type: "password" })
  | (BaseTextFieldProps & { isRevealable?: never; type?: InputType })

const TextField = ({
  placeholder,
  label,
  description,
  errorMessage,
  prefix,
  suffix,
  isPending,
  className,
  isRevealable,
  type,
  ...props
}: TextFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const inputType = isRevealable ? (isPasswordVisible ? "text" : "password") : type
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }
  return (
    <TextFieldPrimitive
      type={inputType}
      {...props}
      className={composeTailwindRenderProps(
        className,
        "group flex flex-col gap-y-1 *:data-[slot=label]:font-medium",
      )}
    >
      {!props.children ? (
        <>
          {label && <Label>{label}</Label>}
          <FieldGroup
            isDisabled={props.isDisabled}
            isInvalid={!!errorMessage}
            className={isRevealable && "pr-9"}
            data-loading={isPending ? "true" : undefined}
          >
            {prefix && typeof prefix === "string" ? (
              <span className="pl-2 text-muted-fg">{prefix}</span>
            ) : (
              prefix
            )}
            <Input placeholder={placeholder} />
            {isRevealable ? (
              <button
                type="button"
                tabIndex={-1}
                aria-label="Toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                className="relative mr-0.5 grid shrink-0 place-content-center rounded-sm border-transparent outline-hidden *:data-[slot=icon]:text-muted-fg focus-visible:*:data-[slot=icon]:text-primary"
              >
                {isPasswordVisible ? <IconEyeClosed /> : <IconEye />}
              </button>
            ) : isPending ? (
              <Loader variant="spin" />
            ) : suffix ? (
              typeof suffix === "string" ? (
                <span className="mr-2 text-muted-fg">{suffix}</span>
              ) : (
                suffix
              )
            ) : null}
          </FieldGroup>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      ) : (
        props.children
      )}
    </TextFieldPrimitive>
  )
}

export type { TextFieldProps }
export { TextField }
