'use client'

import { composeRenderProps } from 'react-aria-components/composeRenderProps'
import { cn, type ClassNameValue } from 'cn'

type Render<T> = string | ((v: T) => string) | undefined

export function cx<T = unknown>(
  ...classes: [...ClassNameValue[], Render<T>]
): string | ((v: T) => string) {
  const className = classes.pop() as Render<T>

  return composeRenderProps(className, (className) => cn(classes, className))
}
