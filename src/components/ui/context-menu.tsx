"use client"

import {
    MenuContent,
    MenuDescription,
    MenuHeader,
    MenuItem,
    MenuLabel,
    MenuSection,
    MenuSeparator,
    MenuShortcut,
    MenuSubMenu,
} from "./menu"
import { MenuTrigger, type MenuTriggerProps } from "react-aria-components/Menu"
import { type PopoverContentProps } from "@/components/ui/popover"

function ContextMenu(props: Omit<MenuTriggerProps, "trigger">) {
    return <MenuTrigger trigger="contextMenu" {...props} />
}

function ContextMenuContent({
                                placement = "bottom start",
                                offset = 4,
                                crossOffset = 0,
                                children,
                                ...props
                            }: Omit<React.ComponentProps<typeof MenuContent<object>>, "children"> &
    Pick<PopoverContentProps, "placement" | "offset" | "crossOffset"> & {
    children?: React.ReactNode
}) {
    return (
        <MenuContent
            popover={{
                placement,
                offset,
                crossOffset,
            }}
            {...props}
        >
            {children}
        </MenuContent>
    )
}

const ContextMenuItem = MenuItem
const ContextMenuSeparator = MenuSeparator
const ContextMenuDescription = MenuDescription
const ContextMenuSection = MenuSection
const ContextMenuHeader = MenuHeader
const ContextMenuShortcut = MenuShortcut
const ContextMenuLabel = MenuLabel
const ContextMenuSub = MenuSubMenu

export {
    ContextMenu,
    ContextMenuSub,
    ContextMenuContent,
    ContextMenuDescription,
    ContextMenuHeader,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSection,
    ContextMenuSeparator,
    ContextMenuShortcut,
}
