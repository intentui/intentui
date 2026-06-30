'use client'

import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'
import {
  CheckboxButton,
  type CheckboxButtonProps,
  CheckboxField as CheckboxFieldPrimitive,
  type CheckboxFieldProps,
} from 'react-aria-components/Checkbox'
import {
  CheckboxGroup as CheckboxGroupPrimitive,
  type CheckboxGroupProps,
} from 'react-aria-components/CheckboxGroup'
import { composeRenderProps } from 'react-aria-components/composeRenderProps'
import { twMerge } from 'tailwind-merge'
import { cx } from '@/lib/primitive'
import { Label } from '@/components/ui/field'

export function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
  return (
    <CheckboxGroupPrimitive
      {...props}
      data-slot="control"
      className={cx(
        'space-y-3 has-[[slot=description]]:not-has-[[slot=errorMessage]]:space-y-6 has-[[slot=description]]:**:data-[slot=label]:font-medium **:[[slot=description]]:block',
        className
      )}
    />
  )
}

export function CheckboxField({ className, ...props }: CheckboxFieldProps) {
  return (
    <CheckboxFieldPrimitive
      data-slot="control"
      {...props}
      className={cx(
        'grid grid-cols-[1.125rem_1fr] gap-x-3 gap-y-1 sm:grid-cols-[1rem_1fr]',
        '*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:mt-0.75 sm:*:data-[slot=control]:mt-1',
        '*:[[slot=errorMessage]]:col-span-full',
        '**:data-[slot=control-label]:col-start-2 **:data-[slot=control-label]:row-start-1',
        '*:[[slot=description]]:col-start-2 *:[[slot=description]]:row-start-2',
        'has-[[slot=description]]:**:data-[slot=control-label]:font-medium',
        className
      )}
    />
  )
}

export function Checkbox({ className, ...props }: CheckboxButtonProps) {
  return (
    <CheckboxButton
      className={cx('group gap-x-3 inline-flex col-span-full focus:outline-hidden', className)}
      {...props}
    >
      {composeRenderProps(
        props.children,
        (children, { isSelected, isIndeterminate, isInvalid }) => {
          const indicator = isIndeterminate ? (
            <MinusIcon data-slot="check-indicator" />
          ) : isSelected ? (
            <CheckIcon data-slot="check-indicator" />
          ) : null

          return (
            <div
              className={twMerge(
                'grid grid-cols-[1.125rem_1fr] items-center gap-y-1 has-data-[slot=control-label]:gap-x-3 sm:grid-cols-[1rem_1fr]'
              )}
            >
              <span
                data-slot="indicator"
                className={twMerge([
                  'col-start-1 row-start-1 relative inset-ring inset-ring-input isolate flex shrink-0 items-center justify-center rounded bg-(--control-bg,transparent) text-bg transition group-hover:inset-ring-muted-fg/30 group-focus-visible:inset-ring-ring',
                  'size-4.5 *:data-[slot=check-indicator]:size-4 sm:size-4 sm:*:data-[slot=check-indicator]:size-3.5',
                  'in-disabled:bg-muted',
                  (isSelected || isIndeterminate) && [
                    'inset-ring-(--checkbox-ring,var(--color-ring)) bg-(--checkbox-bg,var(--color-primary)) text-(--checkbox-fg,var(--color-primary-fg))',
                    'group-invalid:inset-ring/70 group-invalid:bg-danger group-invalid:text-danger-fg dark:group-invalid:inset-ring-danger-subtle-fg/70',
                  ],
                  isInvalid &&
                    'inset-ring-danger-subtle-fg/70 bg-danger-subtle/5 text-danger-fg ring-danger-subtle-fg/20 group-hover:inset-ring-danger-subtle-fg/70',
                ])}
              >
                {indicator}
              </span>
              <Label
                className="col-start-2 row-start-1"
                data-slot="control-label"
                elementType="span"
              >
                {children}
              </Label>
            </div>
          )
        }
      )}
    </CheckboxButton>
  )
}
