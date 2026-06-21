'use client'

import { AnimatePresence, motion } from 'motion/react'
import { use } from 'react'
import { Button as ButtonPrimitive } from 'react-aria-components/Button'
import type { DialogProps, DialogTriggerProps } from 'react-aria-components/Dialog'
import { Dialog, DialogTrigger, OverlayTriggerStateContext } from 'react-aria-components/Dialog'
import { Heading, type HeadingProps } from 'react-aria-components/Heading'
import {
  Modal as ModalPrimitive,
  ModalOverlay,
  type ModalOverlayProps,
} from 'react-aria-components/Modal'
import { Text, type TextProps } from 'react-aria-components/Text'
import { twJoin, twMerge } from 'tailwind-merge'
import { cx } from '@/lib/primitive'
import { Button, type ButtonProps } from './button'

const DrawerRoot = motion.create(ModalPrimitive)
const DrawerOverlay = motion.create(ModalOverlay)

const Drawer = (props: DialogTriggerProps) => <DialogTrigger {...props} />

interface DrawerContentProps
  extends
    Omit<ModalOverlayProps, 'className' | 'children' | 'isDismissable'>,
    Pick<DialogProps, 'aria-label' | 'aria-labelledby' | 'role' | 'children' | 'className'> {
  isFloat?: boolean
  className?: string
  overlay?: Pick<ModalOverlayProps, 'className'>
  side?: 'top' | 'bottom' | 'left' | 'right'
  notch?: boolean
}

const DrawerContent = ({
  side = 'bottom',
  isFloat = false,
  notch = true,
  children,
  className,
  overlay,
  ...props
}: DrawerContentProps) => {
  const state = use(OverlayTriggerStateContext)!
  const isOpen = props.isOpen ?? state?.isOpen ?? false
  const onOpenChange = props.onOpenChange ?? state?.setOpen

  return (
    <AnimatePresence>
      {isOpen && (
        <DrawerOverlay
          isDismissable
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          initial={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(0px)',
          }}
          animate={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(1px)',
          }}
          exit={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(0px)',
          }}
          transition={{ duration: 0.15, ease: 'easeInOut' }}
          className={cx(
            'fixed inset-0 z-50 will-change-auto [--visual-viewport-vertical-padding:32px]',
            'motion-reduce:backdrop-blur-none',
            overlay?.className
          )}
        >
          {({ state }) => (
            <DrawerRoot
              className={twJoin(
                'fixed max-h-full touch-none overflow-hidden bg-bg align-middle text-fg ring ring-input will-change-transform',
                side === 'top' &&
                  (isFloat ? 'inset-x-2 top-2 rounded-lg' : 'inset-x-0 top-0 rounded-b-2xl'),
                side === 'right' && [
                  'w-full max-w-xs overflow-y-auto',
                  '**:[[slot=header]]:text-start',
                  isFloat ? 'inset-y-2 right-2 rounded-lg' : 'inset-y-0 right-0 h-auto',
                ],
                side === 'bottom' &&
                  (isFloat ? 'inset-x-2 bottom-2 rounded-lg' : 'inset-x-0 bottom-0 rounded-t-2xl'),
                side === 'left' && [
                  'w-full max-w-xs overflow-y-auto',
                  '**:[[slot=header]]:text-start',
                  isFloat ? 'inset-y-2 left-2 rounded-lg' : 'inset-y-0 left-0 h-auto',
                ],
                className
              )}
              animate={{ x: 0, y: 0 }}
              initial={{
                x: side === 'left' ? '-100%' : side === 'right' ? '100%' : 0,
                y: side === 'top' ? '-100%' : side === 'bottom' ? '100%' : 0,
              }}
              exit={{
                x: side === 'left' ? '-100%' : side === 'right' ? '100%' : 0,
                y: side === 'top' ? '-100%' : side === 'bottom' ? '100%' : 0,
              }}
              drag={side === 'left' || side === 'right' ? 'x' : 'y'}
              whileDrag={{ cursor: 'grabbing' }}
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              dragTransition={{
                bounceStiffness: 600,
                bounceDamping: 20,
              }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              onDragEnd={(_, { offset, velocity }) => {
                if (side === 'bottom' && (velocity.y > 150 || offset.y > screen.height * 0.25)) {
                  state.close()
                }
                if (side === 'top' && (velocity.y < -150 || offset.y < screen.height * 0.25)) {
                  state.close()
                }
                if (side === 'left' && velocity.x < -150) {
                  state.close()
                }
                if (side === 'right' && velocity.x > 150) {
                  state.close()
                }
              }}
              dragElastic={{
                top: side === 'top' ? 1 : 0,
                bottom: side === 'bottom' ? 1 : 0,
                left: side === 'left' ? 1 : 0,
                right: side === 'right' ? 1 : 0,
              }}
              dragPropagation
            >
              <Dialog
                aria-label="Drawer"
                role="dialog"
                className={twJoin(
                  'relative flex flex-col overflow-hidden outline-hidden will-change-auto',
                  side === 'top' || side === 'bottom'
                    ? 'mx-auto max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] max-w-lg'
                    : 'h-full'
                )}
              >
                {notch && side === 'bottom' && (
                  <div className="notch sticky top-0 mx-auto mt-2.5 h-1.5 w-10 shrink-0 touch-pan-y rounded-full bg-fg/20" />
                )}
                {children as React.ReactNode}
                {notch && side === 'top' && (
                  <div className="notch sticky bottom-0 mx-auto mb-2.5 h-1.5 w-10 shrink-0 touch-pan-y rounded-full bg-fg/20" />
                )}
              </Dialog>
            </DrawerRoot>
          )}
        </DrawerOverlay>
      )}
    </AnimatePresence>
  )
}

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      slot="header"
      className={twMerge('flex flex-col p-4 text-center sm:text-start', className)}
      {...props}
    />
  )
}

const DrawerTitle = ({ className, ...props }: HeadingProps) => (
  <Heading slot="title" className={twMerge('font-semibold text-lg/8', className)} {...props} />
)

const DrawerDescription = ({ className, ...props }: TextProps) => (
  <Text slot="description" className={twMerge('text-muted-fg text-sm', className)} {...props} />
)

const DrawerBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    slot="body"
    className={twMerge(
      'isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-auto px-4 py-1 will-change-scroll',
      className
    )}
    {...props}
  />
)

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      slot="footer"
      className={twMerge(
        'isolate mt-auto flex flex-col-reverse justify-end gap-2 p-4 sm:flex-row',
        className
      )}
      {...props}
    />
  )
}

const DrawerClose = ({ className, intent = 'outline', ref, ...props }: ButtonProps) => {
  return <Button slot="close" className={className} ref={ref} intent={intent} {...props} />
}

const DrawerTrigger = ButtonPrimitive

export type { DrawerContentProps }
export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
}
