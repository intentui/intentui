"use client"

import { createContext, use } from "react"

import { badgeIntents, badgeShapes, badgeStyles } from "@/components/ui/badge"
import { Description, Label } from "@/components/ui/field"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconX } from "@intentui/icons"
import type {
  TagGroupProps as TagGroupPrimitiveProps,
  TagListProps,
  TagProps as TagPrimitiveProps,
} from "react-aria-components"
import {
  Button,
  TagGroup as TagGroupPrimitive,
  TagList as TagListPrimitive,
  Tag as TagPrimitive,
  composeRenderProps,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

const intents = {
  primary: {
    base: [
      badgeIntents.primary,
      "**:[[slot=remove]]:hover:bg-primary **:[[slot=remove]]:hover:text-primary-fg",
    ],
    selected: [
      "bg-primary dark:hover:bg-primary dark:bg-primary hover:bg-primary text-primary-fg dark:text-primary-fg hover:text-primary-fg",
      "**:[[slot=remove]]:hover:bg-primary-fg/50 **:[[slot=remove]]:hover:text-primary",
    ],
  },
  secondary: {
    base: [
      badgeIntents.secondary,
      "**:[[slot=remove]]:hover:bg-fg **:[[slot=remove]]:hover:text-bg",
    ],
    selected: [
      "bg-fg text-bg dark:bg-fg/90 dark:text-secondary",
      "**:[[slot=remove]]:hover:bg-secondary/30 **:[[slot=remove]]:hover:text-secondary",
    ],
  },
  success: {
    base: [
      badgeIntents.success,
      "**:[[slot=remove]]:hover:bg-success **:[[slot=remove]]:hover:text-success-fg",
    ],
    selected: [
      "bg-success dark:bg-success dark:text-success-fg dark:hover:bg-success hover:bg-success text-success-fg hover:text-success-fg",
      "**:[[slot=remove]]:hover:bg-success-fg/30 **:[[slot=remove]]:hover:text-success-fg",
    ],
  },
  warning: {
    base: [
      badgeIntents.warning,
      "**:[[slot=remove]]:hover:bg-warning **:[[slot=remove]]:hover:text-warning-fg",
    ],
    selected: [
      "bg-warning dark:hover:bg-warning dark:bg-warning dark:text-bg hover:bg-warning text-warning-fg hover:text-warning-fg",
      "**:[[slot=remove]]:hover:bg-warning-fg/30 **:[[slot=remove]]:hover:text-warning-fg",
    ],
  },
  danger: {
    base: [
      badgeIntents.danger,
      "**:[[slot=remove]]:hover:bg-danger **:[[slot=remove]]:hover:text-danger-fg",
    ],
    selected: [
      "bg-danger dark:bg-danger dark:hover:bg-danger/90 hover:bg-danger text-danger-fg hover:text-danger-fg",
      "**:[[slot=remove]]:hover:bg-danger-fg/30 **:[[slot=remove]]:hover:text-danger-fg",
    ],
  },
}

type RestrictedIntent = "primary" | "secondary"

type Intent = "primary" | "secondary" | "warning" | "danger" | "success"

type Shape = keyof typeof badgeShapes

type TagGroupContextValue = {
  intent: Intent
  shape: Shape
}

const TagGroupContext = createContext<TagGroupContextValue>({
  intent: "primary",
  shape: "square",
})

interface TagGroupProps extends TagGroupPrimitiveProps {
  intent?: Intent
  shape?: "square" | "circle"
  errorMessage?: string
  label?: string
  description?: string
  ref?: React.RefObject<HTMLDivElement>
}

const TagGroup = ({ children, ref, className, ...props }: TagGroupProps) => {
  return (
    <TagGroupPrimitive
      ref={ref}
      className={twMerge("flex flex-col flex-wrap", className)}
      {...props}
    >
      <TagGroupContext.Provider
        value={{
          intent: props.intent || "primary",
          shape: props.shape || "square",
        }}
      >
        {props.label && <Label className="mb-1">{props.label}</Label>}
        {children}
        {props.description && <Description>{props.description}</Description>}
      </TagGroupContext.Provider>
    </TagGroupPrimitive>
  )
}

const TagList = <T extends object>({ className, ...props }: TagListProps<T>) => {
  return (
    <TagListPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "flex flex-wrap gap-1.5")}
    />
  )
}

const tagStyles = tv({
  base: [badgeStyles.base, "outline-hidden"],
  variants: {
    isLink: { true: "cursor-pointer", false: "cursor-default" },
    isFocusVisible: { true: "inset-ring inset-ring-current/10" },
    isDisabled: { true: "opacity-50" },
    allowsRemoving: { true: "pr-1" },
  },
})

interface TagProps extends TagPrimitiveProps {
  intent?: Intent
  shape?: Shape
}

const Tag = ({ className, intent, shape, ...props }: TagProps) => {
  const textValue = typeof props.children === "string" ? props.children : undefined
  const groupContext = use(TagGroupContext)

  return (
    <TagPrimitive
      textValue={textValue}
      {...props}
      className={composeRenderProps(className, (_, renderProps) => {
        const finalIntent = intent || groupContext.intent
        const finalShape = shape || groupContext.shape

        return tagStyles({
          ...renderProps,
          isLink: "href" in props,
          className: twJoin([
            intents[finalIntent]?.base,
            badgeShapes[finalShape],
            renderProps.isSelected ? intents[finalIntent].selected : undefined,
          ]),
        })
      })}
    >
      {({ allowsRemoving }) => {
        return (
          <>
            {props.children as React.ReactNode}
            {allowsRemoving && (
              <Button
                slot="remove"
                className="-mr-0.5 grid size-3.5 place-content-center rounded outline-hidden [&>[data-slot=icon]]:size-3 [&>[data-slot=icon]]:shrink-0"
              >
                <IconX />
              </Button>
            )}
          </>
        )
      }}
    </TagPrimitive>
  )
}

export type { TagGroupProps, TagProps, TagListProps, RestrictedIntent }
export { Tag, TagList, TagGroup }
