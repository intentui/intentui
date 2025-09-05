"use client"

import {
  IconAlignmentCenter,
  IconAlignmentCenterFill,
  IconAlignmentJustify,
  IconAlignmentJustifyFill,
  IconAlignmentLeft,
  IconAlignmentLeftFill,
  IconAlignmentRight,
  IconAlignmentRightFill,
  IconBold,
  IconBoldFill,
  IconChevronDown,
  IconGallery,
  IconGrid4,
  IconItalic,
  IconItalicFill,
  IconLink,
  IconRedo,
  IconStrikeThrough,
  IconStrikeThroughFill,
  IconUnderline,
  IconUnderlineFill,
  IconUndo,
} from "@intentui/icons"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Menu } from "@/components/ui/menu"
import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSeparator } from "@/components/ui/toolbar"

export default function ToolbarDemo() {
  return (
    <Toolbar aria-label="Toolbars">
      <ToolbarGroup aria-label="Text Formatting Options">
        <ToolbarItem defaultSelected aria-label="Bold" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconBoldFill /> : <IconBold />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Italic" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconItalicFill /> : <IconItalic />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Underline" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconUnderlineFill /> : <IconUnderline />}</>}
        </ToolbarItem>
        <ToolbarItem aria-label="Strikethrough" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <IconStrikeThroughFill /> : <IconStrikeThrough />}</>
          )}
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="Alignment">
        <ToolbarItem aria-label="Align Left" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentLeftFill /> : <IconAlignmentLeft />}</>
          )}
        </ToolbarItem>
        <ToolbarItem size="sq-sm" aria-label="Align Center">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentCenterFill /> : <IconAlignmentCenter />}</>
          )}
        </ToolbarItem>
        <ToolbarItem size="sq-sm" aria-label="Align Right">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentRightFill /> : <IconAlignmentRight />}</>
          )}
        </ToolbarItem>
        <ToolbarItem size="sq-sm" aria-label="Align Justify">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarSeparator />
      <Checkbox>Spell Check</Checkbox>
      <ToolbarGroup className="ml-auto">
        <Menu>
          <Button aria-label="Other options" size="sm" intent="outline">
            Options...
            <IconChevronDown />
          </Button>
          <Menu.Content placement="bottom right">
            <Menu.Item>
              <IconUndo />
              Undo
            </Menu.Item>
            <Menu.Item>
              <IconRedo />
              Redo
            </Menu.Item>
            <Menu.Item>
              <IconLink />
              Insert Link
            </Menu.Item>
            <Menu.Item>
              <IconGallery />
              Insert Image
            </Menu.Item>
            <Menu.Item>
              <IconGrid4 />
              Insert Grid
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </ToolbarGroup>
    </Toolbar>
  )
}
