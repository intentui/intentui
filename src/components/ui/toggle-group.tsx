'use client'

import { createContext, use } from 'react'
import { composeRenderProps } from 'react-aria-components/composeRenderProps'
import { ToggleButton, type ToggleButtonProps } from 'react-aria-components/ToggleButton'
import {
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
} from 'react-aria-components/ToggleButtonGroup'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { cx } from '@/lib/primitive'

type ToggleSize = 'xs' | 'sm' | 'md' | 'lg' | 'sq-xs' | 'sq-sm' | 'sq-md' | 'sq-lg'

interface ToggleGroupContextValue extends Pick<
  ToggleButtonGroupProps,
  'selectionMode' | 'orientation'
> {
  size?: ToggleSize
}

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: 'md',
  selectionMode: 'single',
  orientation: 'horizontal',
})

const useToggleGroupContext = () => use(ToggleGroupContext)

interface ToggleGroupProps extends ToggleButtonGroupProps {
  size?: ToggleSize
  isCircle?: boolean
}

const ToggleGroup = ({
  size = 'md',
  orientation = 'horizontal',
  selectionMode = 'single',
  isCircle,
  className,
  ...props
}: ToggleGroupProps) => {
  return (
    <ToggleGroupContext.Provider value={{ size, selectionMode, orientation }}>
      <ToggleButtonGroup
        data-slot="control"
        selectionMode={selectionMode}
        className={cx(
          [
            '[--toggle-group-radius:var(--radius-lg)] [--toggle-gutter:--spacing(0.5)]',
            '[--toggle-fg:var(--color-fg)] [--toggle-selected-bg:var(--color-primary)] [--toggle-selected-fg:var(--color-primary-fg)]',
            '[--toggle-focused-bg:var(--color-secondary)] [--toggle-focused-fg:var(--color-secondary-fg)]',
            '[--toggle-hover-bg:var(--toggle-focused-bg)] [--toggle-hover-fg:var(--toggle-focused-fg)]',
            '[--toggle-icon:color-mix(in_oklab,var(--toggle-focused-fg)_50%,var(--toggle-focused-bg))]',
            'inset-ring inset-ring-border inline-flex overflow-hidden p-(--toggle-gutter)',
            orientation === 'horizontal' ? 'flex-row' : 'flex-col',
            selectionMode === 'single' ? 'gap-(--toggle-gutter)' : 'gap-0',
            isCircle ? 'rounded-full' : 'rounded-(--toggle-group-radius)',
            selectionMode === 'single' &&
              isCircle &&
              '*:data-[slot=toggle-group-item]:rounded-full',
            selectionMode === 'multiple' &&
              isCircle &&
              '*:data-[slot=toggle-group-item]:last:rounded-e-full *:data-[slot=toggle-group-item]:first:rounded-s-full',
          ],
          className
        )}
        {...props}
      />
    </ToggleGroupContext.Provider>
  )
}

interface ToggleGroupItemProps extends ToggleButtonProps {
  size?: ToggleSize
}

const toggleGroupItemStyles = tv({
  base: [
    'relative isolate',
    'inline-flex flex-row items-center font-medium text-(--toggle-fg) outline-hidden',
    'inset-ring inset-ring-transparent',
    '*:[svg]:-mx-0.5 *:[svg]:shrink-0 *:[svg]:self-center *:[svg]:text-(--btn-icon) hover:*:[svg]:text-(--btn-icon-active)/90 focus-visible:*:[svg]:text-(--btn-icon-active)/80',
    'forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]',
  ],
  variants: {
    orientation: {
      horizontal: 'justify-center',
      vertical: 'justify-start',
    },
    selectionMode: {
      single: 'rounded-[calc(var(--toggle-group-radius)-var(--toggle-gutter))]',
      multiple: 'rounded-none',
    },
    size: {
      xs: [
        'min-h-8 gap-x-1.5 px-2.5 py-1.5 text-sm sm:min-h-7 sm:px-2 sm:py-1.5 sm:text-xs/4',
        '*:[svg]:-mx-px *:[svg]:size-3.5 sm:*:[svg]:size-3',
        '*:data-[slot=loader]:-mx-px *:data-[slot=loader]:size-3.5 sm:*:data-[slot=loader]:size-3',
      ],
      sm: [
        'min-h-9 gap-x-1.5 px-3 py-1.5 sm:min-h-8 sm:px-2.5 sm:py-1.5 sm:text-sm/5',
        '*:[svg]:size-4.5 sm:*:[svg]:size-4',
        '*:data-[slot=loader]:size-4.5 sm:*:data-[slot=loader]:size-4',
      ],
      md: [
        'min-h-10 gap-x-2 px-3.5 py-2 sm:min-h-9 sm:px-3 sm:py-1.5 sm:text-sm/6',
        '*:[svg]:size-5 sm:*:[svg]:size-4',
        '*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4',
      ],
      lg: [
        'min-h-11 gap-x-2 px-4 py-2.5 sm:min-h-10 sm:px-3.5 sm:py-2 sm:text-sm/6',
        '*:[svg]:size-5 sm:*:[svg]:size-4.5',
        '*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4.5',
      ],
      'sq-xs':
        'touch-target size-8 *:data-[slot=loader]:size-3.5 sm:size-7 sm:*:data-[slot=loader]:size-3 *:[svg]:size-3.5 sm:*:[svg]:size-3',
      'sq-sm':
        'touch-target size-9 *:data-[slot=loader]:size-4.5 sm:size-8 sm:*:data-[slot=loader]:size-4 *:[svg]:size-4.5 sm:*:[svg]:size-4',
      'sq-md':
        'touch-target size-10 *:data-[slot=loader]:size-5 sm:size-9 sm:*:data-[slot=loader]:size-4.5 *:[svg]:size-5 sm:*:[svg]:size-4.5',
      'sq-lg':
        'touch-target size-11 *:data-[slot=loader]:size-5 sm:size-10 sm:*:data-[slot=loader]:size-5 *:[svg]:size-5 sm:*:[svg]:size-5',
    },
    isSelected: {
      true: 'inset-ring-fg/20 bg-(--toggle-selected-bg) text-(--toggle-selected-fg) [--toggle-icon:var(--primary-fg)] hover:bg-(--toggle-selected-bg)/90',
    },
    isFocused: {
      true: 'not-selected:bg-(--toggle-focused-bg) not-selected:text-(--toggle-focused-fg) not-selected:[--toggle-icon:var(--toggle-focused-fg)]',
    },
    isFocusVisible: {
      true: 'inset-ring inset-ring-muted-fg/20',
    },
    isHovered: {
      true: 'enabled:not-selected:bg-(--toggle-hover-bg) enabled:not-selected:text-(--toggle-hover-fg) enabled:not-selected:[--toggle-icon:var(--toggle-hover-fg)]',
    },
    isDisabled: {
      true: 'opacity-50 forced-colors:text-[GrayText]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  compoundVariants: [
    {
      isSelected: true,
      isFocusVisible: true,
      className: 'inset-ring-(--toggle-selected-fg)/50',
    },
    {
      selectionMode: 'multiple',
      orientation: 'horizontal',
      className:
        'not-first:-ms-px first:rounded-s-[calc(var(--toggle-group-radius)-var(--toggle-gutter))] last:rounded-e-[calc(var(--toggle-group-radius)-var(--toggle-gutter))]',
    },
    {
      selectionMode: 'multiple',
      orientation: 'vertical',
      className:
        'not-first:-mt-px first:rounded-t-[calc(var(--toggle-group-radius)-var(--toggle-gutter))] last:rounded-b-[calc(var(--toggle-group-radius)-var(--toggle-gutter))]',
    },
  ],
})

const ToggleGroupItem = ({ className, ...props }: ToggleGroupItemProps) => {
  const { size, selectionMode, orientation } = useToggleGroupContext()

  return (
    <ToggleButton
      data-slot="toggle-group-item"
      className={composeRenderProps(className, (className, renderProps) =>
        twMerge(
          toggleGroupItemStyles({
            ...renderProps,
            size,
            orientation,
            selectionMode,
            className,
          })
        )
      )}
      {...props}
    />
  )
}

export type { ToggleGroupItemProps, ToggleGroupProps }
export { ToggleGroup, ToggleGroupItem }
