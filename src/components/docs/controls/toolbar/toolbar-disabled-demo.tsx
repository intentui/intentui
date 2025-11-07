"use client"

import {
  BoltIcon as BoltOutline,
  CursorArrowRaysIcon as CursorArrowRaysOutline,
  NoSymbolIcon as NoSymbolOutline,
  PencilIcon as PencilOutline,
} from "@heroicons/react/24/outline"
import {
  BoltIcon as BoltSolid,
  CursorArrowRaysIcon as CursorArrowRaysSolid,
  NoSymbolIcon as NoSymbolSolid,
  PencilIcon as PencilSolid,
} from "@heroicons/react/24/solid"

import { Toolbar, ToolbarGroup, ToolbarItem } from "@/components/ui/toolbar"

export default function ToolbarDemo() {
  return (
    <span data-slot="layout">
      <Toolbar aria-label="Toolbars">
        <ToolbarGroup isDisabled aria-label="Text Formatting Options">
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
      </Toolbar>
    </span>
  )
}
