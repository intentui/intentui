'use client'

import { createContext, use } from 'react'
import { composeRenderProps } from 'react-aria-components/composeRenderProps'
import { SelectionIndicator } from 'react-aria-components/SelectionIndicator'
import { useSlottedContext } from 'react-aria-components/slots'
import type {
  TabListProps as TabListPrimitiveProps,
  TabPanelProps as TabPanelPrimitiveProps,
  TabPanelsProps,
  TabProps as TabPrimitiveProps,
  TabsProps as TabsPrimitiveProps,
} from 'react-aria-components/Tabs'
import {
  Tab as TabPrimitive,
  TabList as TabListPrimitive,
  TabPanel as TabPanelPrimitive,
  TabPanels as PrimitiveTabPanels,
  Tabs as TabsPrimitive,
  TabsContext,
} from 'react-aria-components/Tabs'
import { twMerge } from 'tailwind-merge'
import { cx } from '@/lib/primitive'

interface TabsProps extends TabsPrimitiveProps {
  ref?: React.RefObject<HTMLDivElement>
}
const Tabs = ({ className, ref, orientation = 'horizontal', ...props }: TabsProps) => {
  return (
    <TabsContext value={{ orientation }}>
      <TabsPrimitive
        orientation={orientation}
        className={cx(
          orientation === 'vertical' ? 'w-full flex-row' : 'flex-col',
          'group/tabs flex gap-4 self-start forced-color-adjust-none',
          className
        )}
        ref={ref}
        {...props}
      />
    </TabsContext>
  )
}
interface TabListContextValue {
  selectionIndicator?: boolean
}
const TabListContext = createContext<TabListContextValue | undefined>(undefined)

export function useTabListContext() {
  const context = use(TabListContext)
  if (!context) {
    throw new Error('useTabsContext must be used within TabsContext.Provider')
  }
  return context
}

interface TabListProps<T extends object> extends TabListPrimitiveProps<T>, TabListContextValue {
  ref?: React.RefObject<HTMLDivElement>
}
const TabList = <T extends object>({
  className,
  selectionIndicator = true,
  ref,
  ...props
}: TabListProps<T>) => {
  return (
    <TabListContext value={{ selectionIndicator }}>
      <TabListPrimitive
        ref={ref}
        data-slot="tab-list"
        {...props}
        className={composeRenderProps(className, (className, { orientation }) =>
          twMerge([
            '[--tab-list-gutter:--spacing(1)]',
            'relative flex forced-color-adjust-none',
            orientation === 'horizontal' &&
              'flex-row gap-x-(--tab-list-gutter) rounded-(--tab-list-rounded) border-b py-(--tab-list-gutter)',
            orientation === 'vertical' &&
              'min-w-56 shrink-0 flex-col items-start gap-y-(--tab-list-gutter) border-l px-(--tab-list-gutter) [--tab-list-gutter:--spacing(2)]',
            className,
          ])
        )}
      />
    </TabListContext>
  )
}

export function TabScrollArea({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className="relative">
      <div className={twMerge('scrollbar-none overflow-x-auto sm:overflow-x-visible', className)}>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full bg-border"
          aria-hidden
        />
        {props.children}
      </div>
    </div>
  )
}

interface TabProps extends TabPrimitiveProps {
  ref?: React.RefObject<HTMLDivElement>
}
const Tab = ({ className, ref, ...props }: TabProps) => {
  const { orientation } = useSlottedContext(TabsContext)!
  const { selectionIndicator } = useTabListContext()
  return (
    <TabPrimitive
      {...props}
      data-slot="tab"
      ref={ref}
      className={cx(
        'group/tab rounded-lg [--tab-gutter:var(--tab-gutter-x)]',
        orientation === 'horizontal'
          ? '[--tab-gutter-x:--spacing(2.5)] [--tab-gutter-y:--spacing(1)] first:-ms-(--tab-gutter) last:-me-(--tab-gutter)'
          : 'w-full justify-start [--tab-gutter-x:--spacing(4)] [--tab-gutter-y:--spacing(1.5)]',
        'relative flex cursor-default items-center whitespace-nowrap font-medium text-sm/6 outline-hidden transition [-webkit-tap-highlight-color:transparent]',
        'px-(--tab-gutter-x) py-(--tab-gutter-y)',
        '*:[svg]:-ms-0.5 *:[svg]:me-2 *:[svg]:size-4 *:[svg]:shrink-0 *:[svg]:self-center *:[svg]:text-muted-fg selected:*:[svg]:text-primary-subtle-fg',
        'selected:text-primary-subtle-fg text-muted-fg hover:bg-secondary selected:hover:bg-primary-subtle hover:text-fg selected:hover:text-primary-subtle-fg focus:ring-0',
        'disabled:opacity-50',
        'href' in props ? 'cursor-pointer' : 'cursor-default',
        className
      )}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          {selectionIndicator && (
            <SelectionIndicator
              data-slot="selected-indicator"
              className={twMerge(
                'absolute bg-primary-subtle-fg duration-200 will-change-transform',
                orientation === 'horizontal'
                  ? 'inset-e-(--tab-gutter-x) start-(--tab-gutter-x) -bottom-[calc(var(--tab-gutter-y)+1px)] h-0.5 motion-safe:transition-[translate,width]'
                  : '-inset-s-[calc(var(--tab-gutter-x)-var(--tab-list-gutter)+1px)] top-(--tab-gutter-y) bottom-(--tab-gutter-y) w-0.5 motion-safe:transition-[translate,height]'
              )}
            />
          )}
        </>
      ))}
    </TabPrimitive>
  )
}

interface TabPanelProps extends TabPanelPrimitiveProps {
  ref?: React.RefObject<HTMLDivElement>
}

const TabPanels = <T extends object>(props: TabPanelsProps<T>) => {
  return <PrimitiveTabPanels {...props} />
}

const TabPanel = ({ className, ref, ...props }: TabPanelProps) => {
  return (
    <TabPanelPrimitive
      {...props}
      ref={ref}
      data-slot="tab-panel"
      className={cx('flex-1 text-fg text-sm/6 focus-visible:outline-hidden', className)}
    />
  )
}

export type { TabListProps, TabPanelProps, TabProps, TabsProps }
export { Tab, TabList, TabPanel, TabPanels, Tabs }
