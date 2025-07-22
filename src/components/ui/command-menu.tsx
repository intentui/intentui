"use client"

import { IconSearch } from "@intentui/icons"
import { createContext, use, useEffect } from "react"
import type {
  AutocompleteProps,
  CollectionRenderer,
  MenuProps,
  MenuTriggerProps,
  SearchFieldProps,
} from "react-aria-components"
import {
  Autocomplete,
  Button,
  Collection,
  CollectionRendererContext,
  DefaultCollectionRenderer,
  Dialog,
  Header,
  Input,
  Menu as MenuPrimitive,
  MenuSection,
  Modal,
  ModalContext,
  ModalOverlay,
  OverlayTriggerStateContext,
  SearchField,
  useFilter,
} from "react-aria-components"
import { twJoin, twMerge } from "tailwind-merge"
import { composeTailwindRenderProps } from "@/lib/primitive"
import { DropdownKeyboard } from "./dropdown"
import { Loader } from "./loader"
import { Menu, type MenuSectionProps } from "./menu"

interface CommandMenuProviderProps {
  isPending?: boolean
  escapeButton?: boolean
}

const CommandMenuContext = createContext<CommandMenuProviderProps | undefined>(undefined)

const useCommandMenu = () => {
  const context = use(CommandMenuContext)

  if (!context) {
    throw new Error("useCommandMenu must be used within a <CommandMenuProvider />")
  }

  return context
}

interface CommandMenuProps extends AutocompleteProps, MenuTriggerProps, CommandMenuProviderProps {
  isDismissable?: boolean
  "aria-label"?: string
  shortcut?: string
  isBlurred?: boolean
  className?: string
  size?: keyof typeof sizes
}

const sizes = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
}

const CommandMenu = ({
  onOpenChange,
  className,
  isDismissable = true,
  escapeButton = true,
  size = "xl",
  isPending,
  isBlurred,
  shortcut,
  ...props
}: CommandMenuProps) => {
  const { contains } = useFilter({ sensitivity: "base" })
  const filter = (textValue: string, inputValue: string) => contains(textValue, inputValue)
  useEffect(() => {
    if (!shortcut) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === shortcut && (e.metaKey || e.ctrlKey)) {
        onOpenChange?.(true)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [shortcut, onOpenChange])
  return (
    <CommandMenuContext value={{ isPending: isPending, escapeButton: escapeButton }}>
      <ModalContext value={{ isOpen: props.isOpen, onOpenChange: onOpenChange }}>
        <ModalOverlay
          isDismissable={isDismissable}
          className={twJoin(
            "fixed top-0 left-0 isolate z-50 h-(--visual-viewport-height) w-screen overflow-hidden pt-4 sm:p-16",
            "grid grid-rows-[1fr_auto] justify-items-center text-center sm:grid-rows-[1fr_auto_3fr]",
            "bg-fg/15 dark:bg-bg/40",
            "exiting:opacity-0 transition duration-100 entering:ease-out exiting:ease-in",
            isBlurred &&
              props.isOpen &&
              "bg-bg bg-clip-padding supports-backdrop-filter:bg-bg/15 supports-backdrop-filter:backdrop-blur dark:supports-backdrop-filter:bg-bg/40",
          )}
        >
          <Modal
            className={twMerge([
              "mx-auto max-h-[calc(var(--visual-viewport-height)*0.8)] w-full transform self-end rounded-t-2xl bg-overlay text-left text-overlay-fg transition-all",
              "shadow-lg ring ring-fg/5 will-change-transform sm:rounded-2xl dark:ring-border",
              "exiting:slide-out-to-bottom sm:exiting:slide-out-to-bottom-0",
              "entering:slide-in-from-bottom sm:entering:slide-in-from-bottom-0",
              "sm:entering:zoom-in-95 entering:fade-in entering:animate-in entering:duration-300 entering:ease-out",
              "sm:exiting:zoom-out-95 exiting:fade-out exiting:animate-out exiting:duration-200 exiting:ease-in",
              sizes[size],
              className,
            ])}
            {...props}
          >
            <Dialog
              aria-label={props["aria-label"] ?? "Command Menu"}
              className="flex max-h-[inherit] flex-col overflow-hidden outline-hidden"
            >
              <Autocomplete filter={filter} {...props} />
            </Dialog>
          </Modal>
        </ModalOverlay>
      </ModalContext>
    </CommandMenuContext>
  )
}

interface CommandMenuSearchProps extends SearchFieldProps {
  placeholder?: string
}

const CommandMenuSearch = ({ className, placeholder, ...props }: CommandMenuSearchProps) => {
  const state = use(OverlayTriggerStateContext)!
  const { isPending, escapeButton } = useCommandMenu()
  return (
    <SearchField
      aria-label="Quick search"
      autoFocus
      className={composeTailwindRenderProps(
        className,
        "flex w-full items-center border-b px-2.5 py-1",
      )}
      {...props}
    >
      {isPending ? (
        <Loader className="size-4.5" variant="spin" />
      ) : (
        <IconSearch
          data-slot="command-menu-search-icon"
          className="size-5 shrink-0 text-muted-fg"
        />
      )}
      <Input
        placeholder={placeholder ?? "Search..."}
        className="w-full min-w-0 bg-transparent px-2.5 py-2 text-base text-fg placeholder-muted-fg outline-hidden focus:outline-hidden sm:px-2 sm:py-1.5 sm:text-sm [&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden"
      />
      {escapeButton && (
        <Button
          onPress={() => state?.close()}
          className="hidden cursor-default rounded border text-current/90 hover:bg-muted lg:inline lg:px-1.5 lg:py-0.5 lg:text-xs"
        >
          Esc
        </Button>
      )}
    </SearchField>
  )
}

const CommandMenuList = <T extends object>({ className, ...props }: MenuProps<T>) => {
  return (
    <CollectionRendererContext.Provider value={renderer}>
      <MenuPrimitive
        className={composeTailwindRenderProps(
          className,
          "grid max-h-full flex-1 grid-cols-[auto_1fr] content-start overflow-y-auto p-2 sm:max-h-110 *:[[role=group]]:mb-6 *:[[role=group]]:last:mb-0",
        )}
        {...props}
      />
    </CollectionRendererContext.Provider>
  )
}

const CommandMenuSection = <T extends object>({
  className,
  ref,
  ...props
}: MenuSectionProps<T>) => {
  return (
    <MenuSection
      ref={ref}
      className={twMerge(
        "col-span-full grid grid-cols-[auto_1fr] content-start gap-y-[calc(var(--spacing)*0.25)]",
        className,
      )}
      {...props}
    >
      {"title" in props && (
        <Header className="col-span-full mb-1 block min-w-(--trigger-width) truncate px-2.5 text-muted-fg text-xs">
          {props.title}
        </Header>
      )}
      <Collection items={props.items}>{props.children}</Collection>
    </MenuSection>
  )
}

const CommandMenuItem = ({ className, ...props }: React.ComponentProps<typeof Menu.Item>) => {
  const textValue =
    props.textValue || (typeof props.children === "string" ? props.children : undefined)
  return (
    <Menu.Item
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(className, "items-center gap-y-0.5")}
    />
  )
}

interface CommandMenuDescriptionProps extends React.ComponentProps<typeof Menu.Description> {}

const CommandMenuDescription = ({ className, ...props }: CommandMenuDescriptionProps) => {
  return (
    <Menu.Description
      className={twMerge("col-start-3 row-start-1 ml-auto", className)}
      {...props}
    />
  )
}

const renderer: CollectionRenderer = {
  CollectionRoot(props) {
    if (props.collection.size === 0) {
      return (
        <div className="col-span-full p-4 text-center text-muted-fg text-sm">No results found.</div>
      )
    }
    return <DefaultCollectionRenderer.CollectionRoot {...props} />
  },
  CollectionBranch: DefaultCollectionRenderer.CollectionBranch,
}

const CommandMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Separator>) => (
  <Menu.Separator className={twMerge("-mx-2", className)} {...props} />
)

const CommandMenuFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "col-span-full flex-none border-t px-2 py-1.5 text-muted-fg text-sm",
        "*:[kbd]:inset-ring *:[kbd]:inset-ring-fg/10 *:[kbd]:mx-1 *:[kbd]:inline-grid *:[kbd]:h-4 *:[kbd]:min-w-4 *:[kbd]:place-content-center *:[kbd]:rounded-xs *:[kbd]:bg-secondary ",
        className,
      )}
      {...props}
    />
  )
}

const CommandMenuLabel = Menu.Label
const CommandMenuKeyboard = DropdownKeyboard

CommandMenu.Search = CommandMenuSearch
CommandMenu.List = CommandMenuList
CommandMenu.Item = CommandMenuItem
CommandMenu.Label = CommandMenuLabel
CommandMenu.Section = CommandMenuSection
CommandMenu.Description = CommandMenuDescription
CommandMenu.Keyboard = CommandMenuKeyboard
CommandMenu.Separator = CommandMenuSeparator
CommandMenu.Footer = CommandMenuFooter

export type { CommandMenuProps, CommandMenuSearchProps, CommandMenuDescriptionProps }
export {
  CommandMenu,
  CommandMenuSearch,
  CommandMenuList,
  CommandMenuItem,
  CommandMenuLabel,
  CommandMenuSection,
  CommandMenuDescription,
  CommandMenuKeyboard,
  CommandMenuSeparator,
  CommandMenuFooter,
}
