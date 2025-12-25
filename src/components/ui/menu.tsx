"use client"

import { CheckIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import type {
  ButtonProps,
  MenuItemProps as MenuItemPrimitiveProps,
  MenuProps as MenuPrimitiveProps,
  MenuSectionProps as MenuSectionPrimitiveProps,
  MenuTriggerProps as MenuTriggerPrimitiveProps,
} from "react-aria-components"
import {
  Button,
  Collection,
  composeRenderProps,
  Header,
  MenuItem as MenuItemPrimitive,
  Menu as MenuPrimitive,
  MenuSection as MenuSectionPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
  SubmenuTrigger as SubmenuTriggerPrimitive,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { tv, type VariantProps } from "tailwind-variants"
import { cx } from "@/lib/primitive"
import {
  DropdownDescription,
  DropdownKeyboard,
  DropdownLabel,
  DropdownSeparator,
  dropdownItemStyles,
  dropdownSectionStyles,
} from "./dropdown"
import { PopoverContent, type PopoverContentProps } from "./popover"

const Menu = (props: MenuTriggerPrimitiveProps) => <MenuTriggerPrimitive {...props} />

const MenuSubMenu = ({ delay = 0, ...props }) => (
  <SubmenuTriggerPrimitive {...props} delay={delay}>
    {props.children}
  </SubmenuTriggerPrimitive>
)

interface MenuTriggerProps extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement>
}

const MenuTrigger = ({ className, ref, ...props }: MenuTriggerProps) => (
  <Button
    ref={ref}
    data-slot="menu-trigger"
    className={cx(
      "relative inline text-left outline-hidden focus-visible:ring-1 focus-visible:ring-primary",
      "*:data-[slot=chevron]:size-5 sm:*:data-[slot=chevron]:size-4",
      className,
    )}
    {...props}
  />
)

interface MenuContentProps<T>
  extends MenuPrimitiveProps<T>,
    Pick<PopoverContentProps, "placement"> {
  className?: string
  popover?: Pick<
    PopoverContentProps,
    | "arrow"
    | "className"
    | "placement"
    | "offset"
    | "crossOffset"
    | "arrowBoundaryOffset"
    | "triggerRef"
    | "isOpen"
    | "onOpenChange"
    | "shouldFlip"
  >
}

const menuContentStyles = tv({
  base: "grid max-h-[inherit] grid-cols-[auto_1fr] gap-y-1 overflow-y-auto overflow-x-hidden overscroll-contain p-1 outline-hidden [clip-path:inset(0_0_0_0_round_calc(var(--radius-xl)-(--spacing(1))))] *:[[role='group']+[role=group]]:mt-3",
})

const MenuContent = <T extends object>({
  className,
  placement,
  popover,
  ...props
}: MenuContentProps<T>) => {
  return (
    <PopoverContent
      className={cx("min-w-32 *:data-[slot=popover-inner]:overflow-hidden", popover?.className)}
      placement={placement}
      {...popover}
    >
      <MenuPrimitive
        data-slot="menu-content"
        className={menuContentStyles({ className })}
        {...props}
      />
    </PopoverContent>
  )
}

interface MenuItemProps extends MenuItemPrimitiveProps, VariantProps<typeof dropdownItemStyles> {}

const MenuItem = ({ className, intent, children, ...props }: MenuItemProps) => {
  const textValue = props.textValue || (typeof children === "string" ? children : undefined)
  return (
    <MenuItemPrimitive
      data-slot="menu-item"
      className={composeRenderProps(className, (className, { hasSubmenu, ...renderProps }) =>
        dropdownItemStyles({
          ...renderProps,
          intent,
          className: hasSubmenu
            ? twMerge(
                intent === "danger" && "open:bg-danger-subtle open:text-danger-subtle-fg",
                intent === "warning" && "open:bg-warning-subtle open:text-warning-subtle-fg",
                intent === undefined &&
                  "open:bg-accent open:text-accent-fg open:*:data-[slot=icon]:text-accent-fg open:*:[.text-muted-fg]:text-accent-fg",
                className,
              )
            : className,
        }),
      )}
      textValue={textValue}
      {...props}
    >
      {(values) => (
        <>
          {values.isSelected && (
            <span
              className={twJoin(
                "group-has-data-[slot=avatar]:absolute group-has-data-[slot=avatar]:right-0",
                "group-has-data-[slot=icon]:absolute group-has-data-[slot=icon]:right-0",
              )}
            >
              {values.selectionMode === "single" && (
                <CheckIcon className="-mx-0.5 mr-2 size-4" data-slot="check-indicator" />
              )}
              {values.selectionMode === "multiple" && (
                <CheckIcon className="-mx-0.5 mr-2 size-4" data-slot="check-indicator" />
              )}
            </span>
          )}

          {typeof children === "function" ? children(values) : children}

          {values.hasSubmenu && (
            <ChevronRightIcon data-slot="chevron" className="absolute right-2 size-4" />
          )}
        </>
      )}
    </MenuItemPrimitive>
  )
}

export interface MenuHeaderProps extends React.ComponentProps<typeof Header> {
  separator?: boolean
}

const MenuHeader = ({ className, separator = false, ...props }: MenuHeaderProps) => (
  <Header
    className={twMerge(
      "col-span-full px-2.5 py-2 font-medium text-base sm:text-sm",
      separator && "-mx-1 border-b sm:px-3 sm:pb-2.5",
      className,
    )}
    {...props}
  />
)

const { section, header } = dropdownSectionStyles()

interface MenuSectionProps<T> extends MenuSectionPrimitiveProps<T> {
  ref?: React.Ref<HTMLDivElement>
  label?: string
}

const MenuSection = <T extends object>({
  className,
  children,
  ref,
  ...props
}: MenuSectionProps<T>) => {
  return (
    <MenuSectionPrimitive ref={ref} className={section({ className })} {...props}>
      {"label" in props && <Header className={header()}>{props.label}</Header>}
      <Collection items={props.items}>{children}</Collection>
    </MenuSectionPrimitive>
  )
}

const MenuSeparator = DropdownSeparator
const MenuShortcut = DropdownKeyboard
const MenuLabel = DropdownLabel
const MenuDescription = DropdownDescription

export type { MenuContentProps, MenuTriggerProps, MenuItemProps, MenuSectionProps }
export {
  menuContentStyles,
  Menu,
  MenuShortcut,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuLabel,
  MenuDescription,
  MenuTrigger,
  MenuSubMenu,
}
