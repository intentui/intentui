"use client"
import { Keyboard } from "@/components/ui/keyboard"
import { IconCheck } from "@intentui/icons"
import type {
  ListBoxItemProps,
  SectionProps,
  SeparatorProps,
  TextProps,
} from "react-aria-components"
import {
  Collection,
  Header,
  ListBoxItem as ListBoxItemPrimitive,
  ListBoxSection,
  Separator,
  Text,
  composeRenderProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

const dropdownItemStyles = tv({
  base: [
    "[--mr-icon:--spacing(2)] sm:[--mr-icon:--spacing(1.5)]",
    "col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] px-3 py-2 supports-[grid-template-columns:subgrid]:grid-cols-subgrid sm:px-2.5 sm:py-1.5",
    "not-has-[[slot=description]]:items-center has-[[slot=description]]:**:data-[slot=check-indicator]:mt-[1.5px]",
    "group relative cursor-default select-none rounded-[calc(var(--radius-lg)-1px)] text-base/6 text-fg outline-0 sm:text-sm/6",
    "**:data-[slot=avatar]:*:mr-1.5 **:data-[slot=avatar]:*:size-6 **:data-[slot=avatar]:mr-(--mr-icon) **:data-[slot=avatar]:size-6 sm:**:data-[slot=avatar]:*:size-5 sm:**:data-[slot=avatar]:size-5",
    "data-danger:**:data-[slot=icon]:text-danger/60 *:data-[slot=icon]:mr-(--mr-icon) **:data-[slot=icon]:size-5 **:data-[slot=icon]:shrink-0 **:data-[slot=icon]:text-muted-fg focus:data-danger:**:data-[slot=icon]:text-danger sm:**:data-[slot=icon]:size-4",
    "[&>[slot=label]+[data-slot=icon]]:absolute [&>[slot=label]+[data-slot=icon]]:right-1",
    "forced-color-adjust-none forced-colors:text-[CanvasText] forced-colors:**:data-[slot=icon]:text-[CanvasText] forced-colors:group-focus:**:data-[slot=icon]:text-[CanvasText]",
  ],
  variants: {
    isDisabled: {
      true: "text-muted-fg forced-colors:text-[GrayText]",
    },
    isSelected: {
      true: "**:data-[slot=avatar]:*:hidden **:data-[slot=avatar]:hidden **:data-[slot=icon]:hidden **:data-[slot=icon]:text-accent-fg",
    },
    isFocused: {
      false: "data-danger:text-danger",
      true: [
        "**:data-[slot=icon]:text-accent-fg **:[kbd]:text-accent-fg",
        "bg-accent text-accent-fg forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
        "data-danger:bg-danger/10 data-danger:text-danger",
        "*:[[slot=description]]:text-accent-fg *:data-[slot=label]:text-accent-fg [&_.text-muted-fg]:text-accent-fg/80",
      ],
    },
  },
})

const dropdownSectionStyles = tv({
  slots: {
    section: "col-span-full grid grid-cols-[auto_1fr]",
    header:
      "col-span-full px-3.5 py-2 font-medium text-muted-fg text-sm/6 sm:px-3 sm:py-1.5 sm:text-xs/6",
  },
})

const { section, header } = dropdownSectionStyles()

interface DropdownSectionProps<T> extends SectionProps<T> {
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

type DropdownItemProps = ListBoxItemProps

const DropdownItem = ({ className, children, ...props }: DropdownItemProps) => {
  const textValue = typeof children === "string" ? children : undefined
  return (
    <ListBoxItemPrimitive
      textValue={textValue}
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemStyles({ ...renderProps, className }),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          {isSelected && <IconCheck className="-mx-1 mr-1.5" data-slot="check-indicator" />}
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
    className={twMerge("col-start-2 text-muted-fg text-sm", className)}
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

const DropdownKeyboard = ({ className, ...props }: React.ComponentProps<typeof Keyboard>) => {
  return (
    <Keyboard
      classNames={{
        base: twMerge(
          "absolute right-2 group-hover:text-primary-fg group-focus:text-primary-fg pl-2",
          className,
        ),
      }}
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
