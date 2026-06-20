'use client'

import {
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
} from 'react-aria-components/TextField'
import { cx } from '@/lib/primitive'
import { fieldStyles } from './field'

interface TextFieldProps extends TextFieldPrimitiveProps {
  ref?: React.RefObject<HTMLInputElement | null>
}

export function TextField({ className, ref, ...props }: TextFieldProps) {
  return (
    <TextFieldPrimitive
      ref={ref}
      data-slot="control"
      className={cx(fieldStyles(), className)}
      {...props}
    />
  )
}
