'use client'

import {
  ColorField as ColorFieldPrimitive,
  type ColorFieldProps,
} from 'react-aria-components/ColorField'
import { cx } from '@/lib/primitive'
import { fieldStyles } from './field'

export function ColorField({ className, ...props }: ColorFieldProps) {
  return (
    <ColorFieldPrimitive {...props} data-slot="control" className={cx(fieldStyles(), className)} />
  )
}
