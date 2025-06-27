"use client"

import { IconCheck, IconHamburger } from "@intentui/icons"
import type { ListBoxItemProps, ListBoxProps } from "react-aria-components"
import {
  ListBoxItem as ListBoxItemPrimitive,
  ListBox as ListBoxPrimitive,
  composeRenderProps,
} from "react-aria-components"

import {
  DropdownDescription,
  DropdownLabel,
  DropdownSection,
  dropdownItemStyles,
} from "@/components/ui/dropdown"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { twMerge } from "tailwind-merge"

const ListBox = <T extends object>({ className, ...props }: ListBoxProps<T>) => (
  <ListBoxPrimitive
    {...props}
    className={composeTailwindRenderProps(
      className,
      "grid max-h-96 w-full min-w-56 scroll-py-1 grid-cols-[auto_1fr] flex-col gap-y-1 overflow-y-auto overscroll-contain rounded-xl border p-1 shadow-lg outline-hidden [scrollbar-width:thin] [&::-webkit-scrollbar]:size-0.5 *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1",
    )}
  />
)

const ListBoxItem = <T extends object>({ children, className, ...props }: ListBoxItemProps<T>) => {
  const textValue = typeof children === "string" ? children : undefined
  return (
    <ListBoxItemPrimitive
      textValue={textValue}
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemStyles({
          ...renderProps,
          className,
        }),
      )}
    >
      {(renderProps) => {
        const { allowsDragging, isSelected, isFocused, isDragging } = renderProps

        return (
          <>
            {allowsDragging && (
              <IconHamburger
                className={twMerge(
                  "size-4 shrink-0 text-muted-fg transition",
                  isFocused && "text-fg",
                  isDragging && "text-fg",
                  isSelected && "text-accent-fg/70",
                )}
              />
            )}
            {isSelected && <IconCheck className="-mx-0.5 mr-2" data-slot="checked-icon" />}
            {typeof children === "function" ? (
              children(renderProps)
            ) : typeof children === "string" ? (
              <DropdownLabel>{children}</DropdownLabel>
            ) : (
              children
            )}
          </>
        )
      }}
    </ListBoxItemPrimitive>
  )
}

type ListBoxSectionProps = React.ComponentProps<typeof DropdownSection>
const ListBoxSection = ({ className, ...props }: ListBoxSectionProps) => {
  return (
    <DropdownSection
      className={twMerge("[&_.lbi:last-child]:-mb-1.5 gap-y-1", className)}
      {...props}
    />
  )
}

const ListBoxLabel = DropdownLabel
const ListBoxDescription = DropdownDescription

ListBox.Section = ListBoxSection
ListBox.Label = ListBoxLabel
ListBox.Description = ListBoxDescription
ListBox.Item = ListBoxItem

export type { ListBoxItemProps, ListBoxSectionProps }
export { ListBox, ListBoxSection, ListBoxItem, ListBoxLabel, ListBoxDescription }
