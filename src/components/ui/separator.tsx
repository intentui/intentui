'use client'

import { Separator as Divider, type SeparatorProps } from 'react-aria-components/Separator'
import { cn } from 'cn'

export function Separator({ orientation = 'horizontal', className, ...props }: SeparatorProps) {
  return (
    <Divider
      className={cn(
        'shrink-0 border-0 bg-border forced-colors:bg-[ButtonBorder]',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
}
