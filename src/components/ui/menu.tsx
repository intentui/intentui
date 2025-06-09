"use client"

import { createContext, use } from "react"

import {
  DropdownDescription,
  DropdownKeyboard,
  DropdownLabel,
  DropdownSeparator,
  dropdownItemStyles,
  dropdownSectionStyles,
} from "@/components/ui/dropdown"
import { PopoverContent } from "@/components/ui/popover"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { IconBulletFill, IconCheck, IconChevronLgRight } from "@intentui/icons"
import type {
  ButtonProps,
  MenuItemProps as MenuItemPrimitiveProps,
  MenuProps as MenuPrimitiveProps,
  MenuSectionProps as MenuSectionPrimitiveProps,
  MenuTriggerProps as MenuTriggerPrimitiveProps,
  PopoverProps,
} from "react-aria-components"
import {
  Button,
  Collection,
  Header,
  MenuItem as MenuItemPrimitive,
  Menu as MenuPrimitive,
  MenuSection as MenuSectionPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
  SubmenuTrigger as SubmenuTriggerPrimitive,
  composeRenderProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import type { VariantProps } from "tailwind-variants"

interface MenuContextProps {
  respectScreen: boolean
}

const MenuContext = createContext<MenuContextProps>({ respectScreen: true })

interface MenuProps extends MenuTriggerPrimitiveProps {
  respectScreen?: boolean
}

const Menu = ({ respectScreen = true, ...props }: MenuProps) => {
  return (
    <MenuContext value={{ respectScreen }}>
      <MenuTriggerPrimitive {...props}>{props.children}</MenuTriggerPrimitive>
    </MenuContext>
  )
}

const MenuSubMenu = ({ delay = 0, ...props }) => (
  <SubmenuTriggerPrimitive {...props} delay={delay}>
    {props.children}
  </SubmenuTriggerPrimitive>
)

interface MenuTriggerProps extends ButtonProps {
  className?: string
  ref?: React.Ref<HTMLButtonElement>
}

const MenuTrigger = ({ className, ref, ...props }: MenuTriggerProps) => (
  <Button
    ref={ref}
    data-slot="menu-trigger"
    className={composeTailwindRenderProps(
      className,
      "relative inline text-left outline-hidden focus-visible:ring-1 focus-visible:ring-primary",
    )}
    {...props}
  >
    {(values) => (
      <>{typeof props.children === "function" ? props.children(values) : props.children}</>
    )}
  </Button>
)

interface MenuContentProps<T>
  extends Pick<
      PopoverProps,
      | "placement"
      | "offset"
      | "crossOffset"
      | "arrowBoundaryOffset"
      | "triggerRef"
      | "isOpen"
      | "onOpenChange"
      | "shouldFlip"
    >,
    MenuPrimitiveProps<T> {
  className?: string
  popoverClassName?: string
  showArrow?: boolean
  respectScreen?: boolean
}

const MenuContent = <T extends object>({
  className,
  showArrow = false,
  popoverClassName,
  respectScreen = true,
  ...props
}: MenuContentProps<T>) => {
  const { respectScreen: respectScreenContext } = use(MenuContext)
  const respectScreenInternal = respectScreenContext ?? respectScreen
  return (
    <PopoverContent
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      shouldFlip={props.shouldFlip}
      respectScreen={respectScreenInternal}
      showArrow={showArrow}
      offset={props.offset}
      placement={props.placement}
      crossOffset={props.crossOffset}
      triggerRef={props.triggerRef}
      arrowBoundaryOffset={props.arrowBoundaryOffset}
      className={composeTailwindRenderProps(
        popoverClassName,
        "z-50 p-0 shadow-xs outline-hidden sm:min-w-40",
      )}
    >
      <MenuPrimitive
        data-slot="menu-content"
        className={composeTailwindRenderProps(
          className,
          "grid max-h-[calc(var(--visual-viewport-height)-10rem)] grid-cols-[auto_1fr] overflow-auto rounded-xl p-1 outline-hidden [clip-path:inset(0_0_0_0_round_calc(var(--radius-lg)-2px))] sm:max-h-[inherit] *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1",
        )}
        {...props}
      />
    </PopoverContent>
  )
}

interface MenuItemProps extends MenuItemPrimitiveProps, VariantProps<typeof dropdownItemStyles> {
  isDanger?: boolean
}

const MenuItem = ({ className, isDanger = false, children, ...props }: MenuItemProps) => {
  const textValue = props.textValue || (typeof children === "string" ? children : undefined)
  return (
    <MenuItemPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemStyles({
          ...renderProps,
          className: renderProps.hasSubmenu
            ? twMerge([
                "data-open:data-danger:bg-danger/10 data-open:data-danger:text-danger",
                "data-open:bg-accent data-open:text-accent-fg data-open:*:data-[slot=icon]:text-accent-fg data-open:*:[.text-muted-fg]:text-accent-fg",
                className,
              ])
            : className,
        }),
      )}
      textValue={textValue}
      data-danger={isDanger ? "true" : undefined}
      {...props}
    >
      {(values) => (
        <>
          {values.isSelected && (
            <>
              {values.selectionMode === "single" && (
                <span
                  data-slot="bullet-icon"
                  className="-mx-0.5 mr-2 flex size-4 shrink-0 items-center justify-center **:data-[slot=indicator]:size-2.5 **:data-[slot=indicator]:shrink-0"
                >
                  <IconBulletFill data-slot="indicator" />
                </span>
              )}
              {values.selectionMode === "multiple" && (
                <IconCheck className="-mx-0.5 mr-2 size-4" data-slot="checked-icon" />
              )}
            </>
          )}

          {typeof children === "function" ? children(values) : children}

          {values.hasSubmenu && (
            <IconChevronLgRight data-slot="chevron" className="absolute right-2 size-3.5" />
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
      "col-span-full px-2.5 py-2 font-semibold text-base sm:text-sm",
      separator && "-mx-1 mb-1 border-b sm:px-3 sm:pb-[0.625rem]",
      className,
    )}
    {...props}
  />
)

const { section, header } = dropdownSectionStyles()

interface MenuSectionProps<T> extends MenuSectionPrimitiveProps<T> {
  ref?: React.Ref<HTMLDivElement>
  title?: string
}

const MenuSection = <T extends object>({ className, ref, ...props }: MenuSectionProps<T>) => {
  return (
    <MenuSectionPrimitive ref={ref} className={section({ className })} {...props}>
      {"title" in props && <Header className={header()}>{props.title}</Header>}
      <Collection items={props.items}>{props.children}</Collection>
    </MenuSectionPrimitive>
  )
}

const MenuSeparator = DropdownSeparator
const MenuKeyboard = DropdownKeyboard
const MenuLabel = DropdownLabel
const MenuDescription = DropdownDescription

Menu.Keyboard = MenuKeyboard
Menu.Content = MenuContent
Menu.Header = MenuHeader
Menu.Item = MenuItem
Menu.Section = MenuSection
Menu.Separator = MenuSeparator
Menu.Label = MenuLabel
Menu.Description = MenuDescription
Menu.Trigger = MenuTrigger
Menu.Submenu = MenuSubMenu

export type { MenuProps, MenuContentProps, MenuTriggerProps, MenuItemProps, MenuSectionProps }
export { Menu }
