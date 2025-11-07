"use client"

import {
  AdjustmentsHorizontalIcon as AdjustmentsHorizontalOutline,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  BoltIcon as BoltOutline,
  ChevronDownIcon,
  CursorArrowRaysIcon as CursorArrowRaysOutline,
  LinkIcon,
  NoSymbolIcon as NoSymbolOutline,
  PencilIcon as PencilOutline,
  PhotoIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline"
import {
  AdjustmentsHorizontalIcon as AdjustmentsHorizontalSolid,
  Bars3BottomLeftIcon as Bars3BottomLeftSolid,
  Bars3BottomRightIcon as Bars3BottomRightSolid,
  Bars3Icon as Bars3Solid,
  BoltIcon as BoltSolid,
  CursorArrowRaysIcon as CursorArrowRaysSolid,
  NoSymbolIcon as NoSymbolSolid,
  PencilIcon as PencilSolid,
} from "@heroicons/react/24/solid"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"
import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSeparator } from "@/components/ui/toolbar"

export default function ToolbarDemo() {
  return (
    <span data-slot="layout">
      <Toolbar aria-label="Toolbars">
        <ToolbarGroup aria-label="Text Formatting Options">
          <ToolbarItem defaultSelected aria-label="Bold" size="sq-sm">
            {({ isSelected }) => <>{isSelected ? <BoltSolid /> : <BoltOutline />}</>}
          </ToolbarItem>
          <ToolbarItem aria-label="Italic" size="sq-sm">
            {({ isSelected }) => <>{isSelected ? <PencilSolid /> : <PencilOutline />}</>}
          </ToolbarItem>
          <ToolbarItem aria-label="Underline" size="sq-sm">
            {({ isSelected }) => (
              <>{isSelected ? <CursorArrowRaysSolid /> : <CursorArrowRaysOutline />}</>
            )}
          </ToolbarItem>
          <ToolbarItem aria-label="Strikethrough" size="sq-sm">
            {({ isSelected }) => <>{isSelected ? <NoSymbolSolid /> : <NoSymbolOutline />}</>}
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup aria-label="Alignment">
          <ToolbarItem aria-label="Align Left" size="sq-sm">
            {({ isSelected }) => (
              <>{isSelected ? <Bars3BottomLeftSolid /> : <Bars3BottomLeftIcon />}</>
            )}
          </ToolbarItem>
          <ToolbarItem size="sq-sm" aria-label="Align Center">
            {({ isSelected }) => (
              <>{isSelected ? <AdjustmentsHorizontalSolid /> : <AdjustmentsHorizontalOutline />}</>
            )}
          </ToolbarItem>
          <ToolbarItem size="sq-sm" aria-label="Align Right">
            {({ isSelected }) => (
              <>{isSelected ? <Bars3BottomRightSolid /> : <Bars3BottomRightIcon />}</>
            )}
          </ToolbarItem>
          <ToolbarItem size="sq-sm" aria-label="Align Justify">
            {({ isSelected }) => <>{isSelected ? <Bars3Solid /> : <Bars3Icon />}</>}
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarSeparator />
        <Checkbox>Spell Check</Checkbox>
        <ToolbarGroup className="ml-auto">
          <Menu>
            <Button aria-label="Other options" size="sm" intent="outline">
              Options...
              <ChevronDownIcon />
            </Button>
            <MenuContent placement="bottom right">
              <MenuItem>
                <ArrowUturnLeftIcon />
                Undo
              </MenuItem>
              <MenuItem>
                <ArrowUturnRightIcon />
                Redo
              </MenuItem>
              <MenuItem>
                <LinkIcon />
                Insert Link
              </MenuItem>
              <MenuItem>
                <PhotoIcon />
                Insert Image
              </MenuItem>
              <MenuItem>
                <Squares2X2Icon />
                Insert Grid
              </MenuItem>
            </MenuContent>
          </Menu>
        </ToolbarGroup>
      </Toolbar>
    </span>
  )
}
