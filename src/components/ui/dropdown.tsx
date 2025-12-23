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
    "min-w-0 [--mr-icon:--spacing(2.5)] sm:[--mr-icon:--spacing(2)]",
    "col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] px-3 py-2 supports-[grid-template-columns:subgrid]:grid-cols-subgrid sm:px-2.5 sm:py-1.5",
    "not-has-[[slot=description]]:items-center",
    "group relative cursor-default select-none rounded-[calc(var(--radius-xl)-(--spacing(1)))] outline-0",
    // text
    "text-base/6 text-fg sm:text-sm/6 forced-colors:text-[CanvasText]",
    // avatar
    "*:data-[slot=avatar]:*:mr-(--mr-icon) *:data-[slot=avatar]:mr-(--mr-icon) has-[[slot=description]]:*:data-[slot=avatar]:row-span-2 *:data-[slot=avatar]:[--avatar-size:--spacing(6)] sm:*:data-[slot=avatar]:[--avatar-size:--spacing(5)]",
    // icon
    "*:data-[slot=icon]:col-start-1 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:mr-(--mr-icon) *:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:shrink-0 [&_[data-slot='icon']:not([class*='text-'])]:text-muted-fg",
    "not-has-[[slot=description]]:*:data-[slot=icon]:size-5 sm:not-has-[[slot=description]]:*:data-[slot=icon]:size-4",
    "has-[[slot=description]]:*:data-[slot=icon]:h-lh has-[[slot=description]]:[&_[data-slot='icon']:not([class*='w-'])]:w-5 sm:has-[[slot=description]]:[&_[data-slot='icon']:not([class*='w-'])]:w-4",
    "[&>[slot=label]+[data-slot=icon]]:absolute [&>[slot=label]+[data-slot=icon]]:right-1",
    // force color adjust
    "forced-color-adjust-none forced-colors:focus:bg-[Highlight] forced-colors:focus:text-[HighlightText] forced-colors:focus:*:data-[slot=icon]:text-[HighlightText]",
  ],
  variants: {
    intent: {
      danger: [
        "text-danger-subtle-fg focus:text-danger-subtle-fg [&_[data-slot='icon']:not([class*='text-'])]:text-danger-subtle-fg/70",
        "*:[[slot=description]]:text-danger-subtle-fg/80 focus:*:[[slot=description]]:text-danger-subtle-fg focus:*:[[slot=label]]:text-danger-subtle-fg",
        "focus:bg-danger-subtle focus:text-danger-subtle-fg forced-colors:focus:text-[Mark] focus:[&_[data-slot='icon']:not([class*='text-'])]:text-danger-subtle-fg",
        "*:data-[slot=keyboard]:text-danger-subtle-fg/70 focus:*:data-[slot=keyboard]:text-danger-subtle-fg",
      ],
      warning: [
        "text-warning-subtle-fg focus:text-warning-subtle-fg [&_[data-slot='icon']:not([class*='text-'])]:text-warning-subtle-fg/70",
        "*:[[slot=description]]:text-warning-subtle-fg/80 focus:*:[[slot=description]]:text-warning-subtle-fg focus:*:[[slot=label]]:text-warning-subtle-fg",
        "focus:bg-warning-subtle focus:text-warning-subtle-fg focus:[&_[data-slot='icon']:not([class*='text-'])]:text-warning-subtle-fg",
        "*:data-[slot=keyboard]:text-warning-subtle-fg/70 focus:*:data-[slot=keyboard]:text-warning-subtle-fg",
      ],
    },
    isDisabled: {
      true: "opacity-50 forced-colors:text-[GrayText]",
    },
    isSelected: {
      true: "[&_[data-slot='icon']:not([class*='text-'])]:text-accent-fg",
    },
    isFocused: {
      true: [
        "*:data-[slot=keyboard]:text-accent-fg [&_[data-slot='icon']:not([class*='text-'])]:text-accent-fg",
        "bg-accent text-accent-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
        "[&_.text-muted-fg]:text-accent-fg/80 *:[[slot=description]]:text-accent-fg *:[[slot=label]]:text-accent-fg",
      ],
    },
    isHovered: {
      true: [
        "*:data-[slot=keyboard]:text-accent-fg [&_[data-slot='icon']:not([class*='text-'])]:text-accent-fg",
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
                "mr-1.5 -ml-0.5 h-lh w-4 shrink-0",
                "group-has-data-[slot=icon]:absolute group-has-data-[slot=icon]:top-1/2 group-has-data-[slot=icon]:right-0.5 group-has-data-[slot=icon]:-translate-y-1/2",
                "group-has-data-[slot=avatar]:absolute group-has-data-[slot=avatar]:top-1/2 group-has-data-[slot=avatar]:right-0.5 group-has-data-[slot=avatar]:-translate-y-1/2",
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

const DropdownSeparator = ({ className, ...props }: Omit<SeparatorProps, "orientation">) => (
  <Separator
    orientation="horizontal"
    className={twMerge("col-span-full -mx-1 h-px bg-fg/10", className)}
    {...props}
  />
)

const DropdownKeyboard = ({ className, ...props }: React.ComponentProps<typeof Keyboard>) => {
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
