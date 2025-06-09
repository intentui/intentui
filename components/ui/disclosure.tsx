"use client"

import * as React from "react"

import { cn } from "@/utils/classes"
import { IconChevronLeft } from "@intentui/icons"
import type {
  ButtonProps,
  DisclosureGroupProps as DisclosureGroupPrimitiveProps,
  DisclosurePanelProps,
  DisclosureProps
} from "react-aria-components"
import {
  Button,
  composeRenderProps,
  Disclosure as DisclosurePrimitive,
  DisclosureGroup as DisclosureGroupPrimitive,
  DisclosurePanel
} from "react-aria-components"
import { tv } from "tailwind-variants"

interface DisclosureGroupProps extends DisclosureGroupPrimitiveProps {
  hideBorder?: boolean
  hideIndicator?: boolean
  className?: string
}

const DisclosureGroupContext = React.createContext<DisclosureGroupProps>({})

const DisclosureGroup = ({
  children,
  hideIndicator,
  hideBorder,
  className,
  ...props
}: DisclosureGroupProps) => {
  return (
    <DisclosureGroupPrimitive
      {...props}
      className={({ isDisabled }) =>
        cn([
          isDisabled ? "cursor-not-allowed opacity-75" : "cursor-pointer",
          hideBorder
            ? "[&_[data-slot=accordion-item]]:border-none"
            : "[&_[data-slot=accordion-item]]:border-b"
        ])
      }
    >
      {(values) => (
        <div data-slot="accordion-item-content" className={className}>
          <DisclosureGroupContext.Provider value={{ hideIndicator, hideBorder }}>
            {typeof children === "function" ? children(values) : children}
          </DisclosureGroupContext.Provider>
        </div>
      )}
    </DisclosureGroupPrimitive>
  )
}

const disclosureStyles = tv({
  base: "flex group relative w-full flex-col",
  variants: {
    isDisabled: {
      true: "cursor-not-allowed opacity-75"
    },
    isExpanded: {
      true: "pb-3"
    }
  },
  compoundVariants: [
    {
      hideBorder: true,
      isExpanded: true,
      className: "pb-2"
    }
  ]
})

const Disclosure = ({ className, ...props }: DisclosureProps) => {
  return (
    <DisclosurePrimitive
      data-slot="accordion-item"
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        disclosureStyles({ ...renderProps, className })
      )}
    >
      {props.children}
    </DisclosurePrimitive>
  )
}

const accordionTriggerStyles = tv({
  base: [
    "flex flex-1 group rounded-lg aria-expanded:text-fg text-muted-fg sm:text-sm items-center gap-x-2 font-medium"
  ],
  variants: {
    hideBorder: {
      true: "py-2",
      false: "py-3"
    },
    isFocused: {
      true: "outline-none text-fg"
    },
    isOpen: {
      true: "text-fg"
    },
    isDisabled: {
      true: "opacity-50 cursor-default"
    }
  }
})

const Trigger = ({ className, ...props }: ButtonProps) => {
  const { hideIndicator, hideBorder } = React.useContext(DisclosureGroupContext)
  return (
    <Button
      {...props}
      slot="trigger"
      className={composeRenderProps(className, (className, renderProps) =>
        accordionTriggerStyles({
          ...renderProps,
          hideBorder,
          className
        })
      )}
    >
      {(values) => (
        <>
          {typeof props.children === "function" ? props.children(values) : props.children}
          {!hideIndicator && (
            <IconChevronLeft
              className={cn(
                "ml-auto transition shrink-0 duration-300 group-aria-expanded:-rotate-90"
              )}
            />
          )}
        </>
      )}
    </Button>
  )
}

const Panel = ({ className, ...props }: DisclosurePanelProps) => {
  return (
    <DisclosurePanel {...props} className={cn("sm:text-sm", className)}>
      {props.children}
    </DisclosurePanel>
  )
}

Disclosure.Trigger = Trigger
Disclosure.Panel = Panel

export { DisclosureGroup, Disclosure }
