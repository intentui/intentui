"use client"

import { CheckIcon } from "@heroicons/react/20/solid"
import type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps } from "react-aria-components"
import {
  composeRenderProps,
  ListBoxItem as ListBoxItemPrimitive,
  ListBox as ListBoxPrimitive,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { cx } from "@/lib/primitive"
import {
  DropdownDescription,
  DropdownLabel,
  DropdownSection,
  type DropdownSectionProps,
  dropdownItemStyles,
} from "./dropdown"

const ListBox = <T extends object>({ className, ...props }: ListBoxProps<T>) => (
  <ListBoxPrimitive
    {...props}
    className={cx(
      "grid max-h-96 w-full min-w-56 scroll-py-1 grid-cols-[auto_1fr] flex-col gap-y-1 overflow-y-auto overscroll-contain rounded-xl border bg-bg p-1 outline-hidden [scrollbar-width:thin] has-data-[slot=drag-icon]:grid-cols-[auto_auto_1fr] [&::-webkit-scrollbar]:size-0.5 *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1",
      className,
    )}
  />
)

const ListBoxItem = <T extends object>({ children, className, ...props }: ListBoxItemProps<T>) => {
  const textValue = typeof children === "string" ? children : undefined
  return (
    <ListBoxItemPrimitive
      textValue={textValue}
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemStyles({
          ...renderProps,
          className: twJoin(
            "group not-has-[[slot=description]]:items-start",
            // "has-data-[slot=drag-icon]:*:data-[slot=check-icon]:absolute has-data-[slot=drag-icon]:*:data-[slot=check-icon]:right-0",
            "has-data-[slot=drag-icon]:*:[[slot=label]]:col-start-3",
            "has-data-[slot=drag-icon]:*:data-[slot=icon]:col-start-2",
            "href" in props ? "cursor-pointer" : "cursor-default",
            className,
          ),
        }),
      )}
      data-slot="list-box-item"
      {...props}
    >
      {(renderProps) => {
        const { allowsDragging, isSelected } = renderProps

        return (
          <>
            {allowsDragging && (
              <svg
                data-slot="drag-icon"
                className="mr-2 size-5 h-lh text-muted-fg sm:w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 5.5C11 6.32843 10.3284 7 9.5 7C8.67157 7 8 6.32843 8 5.5C8 4.67157 8.67157 4 9.5 4C10.3284 4 11 4.67157 11 5.5Z"
                  fill="currentColor"
                />
                <path
                  d="M16 5.5C16 6.32843 15.3284 7 14.5 7C13.6716 7 13 6.32843 13 5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5Z"
                  fill="currentColor"
                />
                <path
                  d="M11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5Z"
                  fill="currentColor"
                />
                <path
                  d="M16 18.5C16 19.3284 15.3284 20 14.5 20C13.6716 20 13 19.3284 13 18.5C13 17.6716 13.6716 17 14.5 17C15.3284 17 16 17.6716 16 18.5Z"
                  fill="currentColor"
                />
                <path
                  d="M11 12C11 12.8284 10.3284 13.5 9.5 13.5C8.67157 13.5 8 12.8284 8 12C8 11.1716 8.67157 10.5 9.5 10.5C10.3284 10.5 11 11.1716 11 12Z"
                  fill="currentColor"
                />
                <path
                  d="M16 12C16 12.8284 15.3284 13.5 14.5 13.5C13.6716 13.5 13 12.8284 13 12C13 11.1716 13.6716 10.5 14.5 10.5C15.3284 10.5 16 11.1716 16 12Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {isSelected && (
              <CheckIcon
                className="-mx-0.5 mr-2 h-lh w-5 shrink-0 group-allows-dragging:col-start-2 sm:w-4"
                data-slot="check-icon"
              />
            )}
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

const ListBoxSection = <T extends object>({ className, ...props }: DropdownSectionProps<T>) => {
  return (
    <DropdownSection
      className={twMerge("gap-y-1 *:data-[slot=list-box-item]:last:-mb-1.5", className)}
      {...props}
    />
  )
}

const ListBoxLabel = DropdownLabel
const ListBoxDescription = DropdownDescription

export type { ListBoxItemProps, ListBoxSectionProps }
export { ListBox, ListBoxSection, ListBoxItem, ListBoxLabel, ListBoxDescription }
