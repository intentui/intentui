'use client'

import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  MenuContent,
  MenuDescription,
  MenuHeader,
  MenuItem,
  MenuLabel,
  MenuSection,
  MenuSeparator,
  MenuShortcut,
  MenuSubMenu,
} from './menu'
import { createPortal } from 'react-dom'
import { MenuTrigger, type MenuTriggerProps } from 'react-aria-components/Menu'
import { PopoverContext } from 'react-aria-components/Popover'
import { type PopoverContentProps } from '@/components/ui/popover'
import { useIsMobile } from '@/hooks/use-mobile'

function ContextMenu({
  children,
  className,
  onOpenChange,
  ...props
}: Omit<MenuTriggerProps, 'trigger' | 'isOpen' | 'defaultOpen'> & {
  className?: string
}) {
  const [position, setPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const positionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  return (
    <MenuTrigger
      data-slot="context-menu"
      trigger={isMobile ? 'longPress' : undefined}
      {...props}
      isOpen={!!position}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setPosition(null)
          onOpenChange?.(false)
        }
      }}
    >
      {position &&
        createPortal(
          <div
            data-slot="context-menu-anchor"
            ref={positionRef}
            style={{
              position: 'fixed',
              top: position.y,
              left: position.x,
            }}
          />,
          document.body
        )}
      <div
        data-slot="context-menu-trigger"
        className={twMerge('contents select-none', className)}
        onContextMenu={(e) => {
          e.preventDefault()
          const wasOpen = position !== null
          setPosition({
            y: e.clientY,
            x: e.clientX,
          })
          if (!wasOpen) {
            onOpenChange?.(true)
          }
        }}
      >
        <PopoverContext.Consumer>
          {(ctx) => (
            <PopoverContext.Provider
              value={{
                ...ctx,
                ...position,
                triggerRef: positionRef,
                style: undefined,
              }}
            >
              {children}
            </PopoverContext.Provider>
          )}
        </PopoverContext.Consumer>
      </div>
    </MenuTrigger>
  )
}

function ContextMenuContent({
  placement = 'bottom start',
  offset = 4,
  crossOffset = 0,
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuContent<object>>, 'children'> &
  Pick<PopoverContentProps, 'placement' | 'offset' | 'crossOffset'> & {
    children?: React.ReactNode
  }) {
  return (
    <MenuContent
      popover={{
        placement,
        offset,
        crossOffset,
      }}
      {...props}
    >
      {children}
    </MenuContent>
  )
}

const ContextMenuItem = MenuItem
const ContextMenuSeparator = MenuSeparator
const ContextMenuDescription = MenuDescription
const ContextMenuSection = MenuSection
const ContextMenuHeader = MenuHeader
const ContextMenuShortcut = MenuShortcut
const ContextMenuLabel = MenuLabel
const ContextMenuSub = MenuSubMenu

export {
  ContextMenu,
  ContextMenuSub,
  ContextMenuContent,
  ContextMenuDescription,
  ContextMenuHeader,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSection,
  ContextMenuSeparator,
  ContextMenuShortcut,
}
