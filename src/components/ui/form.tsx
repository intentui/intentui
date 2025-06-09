"use client"

import type { FormProps as FormPrimitiveProps } from "react-aria-components"
import { Form as FormPrimitive } from "react-aria-components"

interface FormProps extends FormPrimitiveProps {
  ref?: React.RefObject<HTMLFormElement>
}

const Form = ({ ref, ...props }: FormProps) => {
  return <FormPrimitive ref={ref} {...props} />
}

export type { FormProps }
export { Form }
