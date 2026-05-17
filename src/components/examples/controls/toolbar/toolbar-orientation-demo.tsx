"use client"

import {
  AdjustmentsHorizontalIcon as AdjustmentsHorizontalOutline,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  BoltIcon as BoltOutline,
  CursorArrowRaysIcon as CursorArrowRaysOutline,
  NoSymbolIcon as NoSymbolOutline,
  PencilIcon as PencilOutline,
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

import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSeparator } from "@/components/ui/toolbar"

export default function ToolbarDemo() {
  return (
    <span data-slot="layout">
      <Toolbar orientation="vertical" aria-label="Toolbars">
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
      </Toolbar>
    </span>
  )
}
