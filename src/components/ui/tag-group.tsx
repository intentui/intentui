"use client"

import { createContext, use } from "react"

import { badgeIntents, badgeStyles } from "@/components/ui/badge"
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

type CircleProps = { isCircle?: boolean }

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

interface TagGroupContextValue extends CircleProps {
  intent: Intent
}

const TagGroupContext = createContext<TagGroupContextValue>({
  intent: "primary",
  isCircle: true,
})

interface TagGroupProps extends TagGroupPrimitiveProps, CircleProps {
  intent?: Intent
  errorMessage?: string
  label?: string
  description?: string
  ref?: React.RefObject<HTMLDivElement>
}

const TagGroup = ({
  children,
  ref,
  intent = "primary",
  isCircle = true,
  className,
  ...props
}: TagGroupProps) => {
  return (
    <TagGroupPrimitive
      ref={ref}
      className={twMerge("flex flex-col flex-wrap", className)}
      {...props}
    >
      <TagGroupContext.Provider value={{ intent, isCircle }}>
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
    isFocusVisible: { true: "inset-ring inset-ring-current/10" },
    isDisabled: { true: "opacity-50" },
    allowsRemoving: { true: "pr-1" },
  },
})

interface TagProps extends TagPrimitiveProps, CircleProps {
  intent?: Intent
}

const Tag = ({ className, intent, isCircle, children, ...props }: TagProps) => {
  const textValue = typeof children === "string" ? children : undefined
  const { intent: groupIntent, isCircle: groupIsCircle } = use(TagGroupContext)

  const finalIntent = intent ?? groupIntent
  const finalShape = isCircle !== undefined ? isCircle : groupIsCircle
  const baseClasses = intents[finalIntent].base
  const selectedClasses = intents[finalIntent].selected
  const shapeClasses = finalShape
    ? "rounded-full px-2"
    : "rounded-[calc(var(--radius-sm)-1px)] px-1.5"
  return (
    <TagPrimitive
      textValue={textValue}
      {...props}
      className={composeRenderProps(className, (_, renderProps) =>
        tagStyles({
          ...renderProps,
          className: twJoin([
            baseClasses,
            shapeClasses,
            renderProps.isSelected ? selectedClasses : undefined,
          ]),
        }),
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button
              slot="remove"
              className={twJoin([
                "-mx-0.5 grid size-3.5 shrink-0 place-content-center outline-hidden *:data-[slot=icon]:size-3",
                finalShape ? "rounded-full" : "rounded-[calc(var(--radius-xs)-1px)]",
              ])}
            >
              <IconX />
            </Button>
          )}
        </>
      )}
    </TagPrimitive>
  )
}

export type { TagGroupProps, TagProps, TagListProps, RestrictedIntent }
export { Tag, TagList, TagGroup }
