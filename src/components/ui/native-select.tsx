'use client'

import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { twMerge } from 'tailwind-merge'
import { fieldStyles } from '@/components/ui/field'

export function NativeSelect({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="control"
      className={fieldStyles({
        className: twMerge('relative w-full has-[select:disabled]:opacity-50', className),
      })}
      {...props}
    />
  )
}

export interface NativeSelectContentProps extends React.ComponentProps<'select'> {
  isInvalid?: boolean
}
export function NativeSelectContent({ className, isInvalid, ...props }: NativeSelectContentProps) {
  return (
    <div data-slot="control" className="relative flex items-center justify-between">
      <select
        data-slot="select"
        aria-invalid={isInvalid ? 'true' : undefined}
        className={twMerge(
          'relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:pr-8 sm:pl-[calc(--spacing(3)-1px)]',
          'text-base/6 text-fg placeholder:text-muted-fg sm:text-sm/6',
          'bg-(--control-bg,transparent)',
          'border border-input enabled:hover:border-muted-fg/30',
          'outline-hidden focus:border-ring/70 focus:ring-3 focus:ring-ring/20 focus:enabled:hover:border-ring/80',
          'aria-invalid:border-danger-subtle-fg/70 focus:aria-invalid:border-danger-subtle-fg/70 focus:aria-invalid:ring-danger-subtle-fg/20 aria-invalid:enabled:hover:border-danger-subtle-fg/80 focus:aria-invalid:enabled:hover:border-danger-subtle-fg/80',
          'disabled:bg-muted forced-colors:in-disabled:text-[GrayText]',
          'in-disabled:bg-muted forced-colors:in-disabled:text-[GrayText]',
          'dark:scheme-dark',
          className
        )}
        {...props}
      />
      <ChevronUpDownIcon className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-muted-fg sm:right-2.5 sm:size-4" />
    </div>
  )
}
