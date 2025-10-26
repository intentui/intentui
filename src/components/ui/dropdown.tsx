"use client"

import { CheckIcon } from "@heroicons/react/16/solid"
import type {
  ListBoxItemProps,
  ListBoxSectionProps,
  SeparatorProps,
  TextProps,
} from "react-aria-components"
import {
  Collection,
  composeRenderProps,
  Header,
  ListBoxItem as ListBoxItemPrimitive,
  ListBoxSection,
  Separator,
  Text,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"
import { Keyboard } from "./keyboard"

const dropdownSectionStyles = tv({
  slots: {
    section: "col-span-full grid grid-cols-[auto_1fr]",
    header:
      "col-span-full px-3 py-2 font-medium text-muted-fg text-sm/6 sm:px-2.5 sm:py-1.5 sm:text-xs/3",
  },
})

const { section, header } = dropdownSectionStyles()

interface DropdownSectionProps<T> extends ListBoxSectionProps<T> {
  title?: string
}

const DropdownSection = <T extends object>({
  className,
  children,
  ...props
}: DropdownSectionProps<T>) => {
  return (
    <ListBoxSection className={section({ className })}>
      {"title" in props && <Header className={header()}>{props.title}</Header>}
      <Collection items={props.items}>{children}</Collection>
    </ListBoxSection>
  )
}

const dropdownItemStyles = tv({
  base: [
    "min-w-0 [--mr-icon:--spacing(2)] sm:[--mr-icon:--spacing(1.5)]",
    "col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] px-3 py-2 supports-[grid-template-columns:subgrid]:grid-cols-subgrid sm:px-2.5 sm:py-1.5",
    "not-has-[[slot=description]]:items-center",
    "group relative cursor-default select-none rounded-[calc(var(--radius-xl)-(--spacing(1)))] text-base/6 text-fg outline-0 sm:text-sm/6",
    "**:data-[slot=avatar]:*:mr-(--mr-icon) **:data-[slot=avatar]:mr-(--mr-icon) **:data-[slot=avatar]:[--avatar-size:--spacing(6)] sm:**:data-[slot=avatar]:[--avatar-size:--spacing(5)]",
    "*:data-[slot=icon]:mr-(--mr-icon) **:data-[slot=icon]:h-5 **:data-[slot=icon]:w-5 **:data-[slot=icon]:shrink-0 has-[[slot=description]]:**:data-[slot=icon]:h-[1lh] sm:**:data-[slot=icon]:h-4 sm:**:data-[slot=icon]:w-4 [&_[data-slot='icon']:not([class*='text-'])]:text-muted-fg",
    "[&>[slot=label]+[data-slot=icon]]:absolute [&>[slot=label]+[data-slot=icon]]:right-1",
    "forced-color-adjust-none forced-colors:text-[CanvasText] forced-colors:**:data-[slot=icon]:text-[CanvasText] forced-colors:group-focus:**:data-[slot=icon]:text-[CanvasText]",
  ],
  variants: {
    intent: {
      danger: [
        "text-danger-subtle-fg focus:text-danger-subtle-fg [&_[data-slot='icon']:not([class*='text-'])]:text-danger-subtle-fg/70",
        "*:[[slot=description]]:text-danger-subtle-fg/80 focus:*:[[slot=description]]:text-danger-subtle-fg focus:*:[[slot=label]]:text-danger-subtle-fg",
        "focus:bg-danger-subtle focus:text-danger-subtle-fg forced-colors:focus:text-[Mark] focus:[&_[data-slot='icon']:not([class*='text-'])]:text-danger-subtle-fg",
      ],
      warning: [
        "text-warning-subtle-fg focus:text-warning-subtle-fg [&_[data-slot='icon']:not([class*='text-'])]:text-warning-subtle-fg/70",
        "*:[[slot=description]]:text-warning-subtle-fg/80 focus:*:[[slot=description]]:text-warning-subtle-fg focus:*:[[slot=label]]:text-warning-subtle-fg",
        "focus:bg-warning-subtle focus:text-warning-subtle-fg focus:[&_[data-slot='icon']:not([class*='text-'])]:text-warning-subtle-fg",
      ],
    },
    isDisabled: {
      true: "text-muted-fg forced-colors:text-[GrayText]",
    },
    isSelected: {
      true: "**:data-[slot=icon]:text-accent-fg",
    },
    isFocused: {
      true: [
        "**:data-[slot=icon]:text-accent-fg **:[kbd]:text-accent-fg",
        "bg-accent text-accent-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
        "[&_.text-muted-fg]:text-accent-fg/80 *:[[slot=description]]:text-accent-fg *:[[slot=label]]:text-accent-fg",
      ],
    },
    isHovered: {
      true: [
        "**:data-[slot=icon]:text-accent-fg **:[kbd]:text-accent-fg",
        "bg-accent text-accent-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
        "[&_.text-muted-fg]:text-accent-fg/80 *:[[slot=description]]:text-accent-fg *:[[slot=label]]:text-accent-fg",
      ],
    },
  },
})

interface DropdownItemProps extends ListBoxItemProps {
  intent?: "danger" | "warning"
}

const DropdownItem = ({ className, children, intent, ...props }: DropdownItemProps) => {
  const textValue = typeof children === "string" ? children : undefined
  return (
    <ListBoxItemPrimitive
      textValue={textValue}
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemStyles({ ...renderProps, intent, className }),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          {isSelected && (
            <CheckIcon
              className={twJoin(
                "-ml-0.5 mr-1.5 h-[1lh] w-4 shrink-0",
                "group-has-data-[slot=icon]:-translate-y-1/2 group-has-data-[slot=icon]:absolute group-has-data-[slot=icon]:top-1/2 group-has-data-[slot=icon]:right-0.5",
                "group-has-data-[slot=avatar]:-translate-y-1/2 group-has-data-[slot=avatar]:absolute group-has-data-[slot=avatar]:top-1/2 group-has-data-[slot=avatar]:right-0.5",
              )}
              data-slot="check-indicator"
            />
          )}
          {typeof children === "string" ? <DropdownLabel>{children}</DropdownLabel> : children}
        </>
      ))}
    </ListBoxItemPrimitive>
  )
}

interface DropdownLabelProps extends TextProps {
  ref?: React.Ref<HTMLDivElement>
}

const DropdownLabel = ({ className, ref, ...props }: DropdownLabelProps) => (
  <Text slot="label" ref={ref} className={twMerge("col-start-2", className)} {...props} />
)

interface DropdownDescriptionProps extends TextProps {
  ref?: React.Ref<HTMLDivElement>
}

const DropdownDescription = ({ className, ref, ...props }: DropdownDescriptionProps) => (
  <Text
    slot="description"
    ref={ref}
    className={twMerge("col-start-2 font-normal text-muted-fg text-sm", className)}
    {...props}
  />
)

const DropdownSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator
    orientation="horizontal"
    className={twMerge("-mx-1 col-span-full my-1 h-px bg-fg/10", className)}
    {...props}
  />
)

type DropdownKeyboardProps = React.ComponentProps<typeof Keyboard> & {
  keys?: React.ReactNode
}

const DropdownKeyboard = ({ className, ...props }: DropdownKeyboardProps) => {
  return (
    <Keyboard
      className={twMerge(
        "absolute right-2 pl-2 group-hover:text-primary-fg group-focus:text-primary-fg",
        className,
      )}
      {...props}
    />
  )
}

/**
 * Note: This is not exposed component, but it's used in other components to render dropdowns.
 * @internal
 */
export type {
  DropdownSectionProps,
  DropdownItemProps,
  DropdownLabelProps,
  DropdownDescriptionProps,
}
export {
  DropdownSeparator,
  DropdownItem,
  DropdownLabel,
  DropdownDescription,
  DropdownKeyboard,
  dropdownItemStyles,
  DropdownSection,
  dropdownSectionStyles,
}
