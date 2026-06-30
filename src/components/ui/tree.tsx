'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Button } from 'react-aria-components/Button'
import type {
  TreeItemContentProps,
  TreeItemContentRenderProps,
  TreeItemProps,
  TreeProps,
} from 'react-aria-components/Tree'
import {
  Tree as TreePrimitive,
  TreeItem as TreeItemPrimitive,
  TreeItemContent,
} from 'react-aria-components/Tree'
import { twJoin, twMerge } from 'tailwind-merge'
import { cx } from '@/lib/primitive'
import { Checkbox, CheckboxField } from './checkbox'

const Tree = <T extends object>({ className, ...props }: TreeProps<T>) => {
  return (
    <TreePrimitive
      className={cx(
        twJoin(
          'flex cursor-default flex-col gap-y-2 overflow-auto outline-hidden forced-color-adjust-none',
          '[--tree-active-bg:var(--color-primary-subtle)] [--tree-active-fg:var(--color-primary-subtle-fg)]'
        ),
        className
      )}
      {...props}
    />
  )
}

const TreeItem = <T extends object>({ className, ...props }: TreeItemProps<T>) => {
  return (
    <TreeItemPrimitive
      className={cx(
        [
          'shrink-0 rounded-lg px-2 py-1.5 pe-2',
          'group/tree-item relative flex select-none rounded-lg focus:outline-hidden',
          'focus:bg-(--tree-active-bg) focus:text-(--tree-active-fg) focus:**:[.text-muted-fg]:text-(--tree-active-fg)',
          '**:data-[slot=avatar]:*:size-6 **:data-[slot=avatar]:size-6 sm:**:data-[slot=avatar]:*:size-5 sm:**:data-[slot=avatar]:size-5',
          '**:[svg]:size-5 **:[svg]:shrink-0 sm:**:[svg]:size-4',
          '**:[svg:not([data-slot=check-indicator]):not([data-slot=chevron])]:me-1',
          'disabled:opacity-50 forced-colors:[',
          'href' in props ? 'cursor-pointer' : 'cursor-default',
        ],
        className
      )}
      {...props}
    />
  )
}

interface TreeContentProps extends TreeItemContentProps {
  className?: string
}

const TreeContent = ({ className, children, ...props }: TreeContentProps) => {
  return (
    <TreeItemContent {...props}>
      {(values) => (
        <div
          className={twMerge(
            'relative flex w-full min-w-0 items-center gap-x-1 truncate text-sm/6',
            className
          )}
        >
          {values.allowsDragging && <Button className="sr-only" slot="drag" />}
          {values.selectionMode === 'multiple' && values.selectionBehavior === 'toggle' && (
            <CheckboxField className="gap-x-0" slot="selection">
              <Checkbox className="col-span-1" />
            </CheckboxField>
          )}
          <div
            className={twJoin(
              'relative w-[calc(calc(var(--tree-item-level)-1)*(--spacing(5)))] shrink-0',
              'before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-item-level)-1px),var(--border)_calc(var(--tree-item-level)-1px),var(--border)_calc(var(--tree-item-level)))]'
            )}
          />
          {values.hasChildItems ? (
            <TreeIndicator
              values={{
                isDisabled: values.isDisabled,
                isExpanded: values.isExpanded,
              }}
            />
          ) : (
            <span aria-hidden className="block w-5 shrink-0" />
          )}
          {typeof children === 'function' ? children(values) : children}
        </div>
      )}
    </TreeItemContent>
  )
}

const TreeIndicator = ({
  values,
}: {
  values: Pick<TreeItemContentRenderProps, 'isDisabled' | 'isExpanded'>
}) => {
  return (
    <Button
      slot="chevron"
      isDisabled={values.isDisabled}
      className={twJoin(
        'shrink-0 content-center text-muted-fg hover:text-fg',
        values.isExpanded && 'text-fg'
      )}
    >
      <ChevronRightIcon
        data-slot="chevron"
        className={twJoin(
          'size-5 transition-transform duration-200 ease-in-out sm:size-4',
          values.isExpanded && 'rotate-90'
        )}
      />
    </Button>
  )
}

export type { TreeItemProps, TreeProps }
export { Tree, TreeContent, TreeIndicator, TreeItem }
