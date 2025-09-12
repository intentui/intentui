"use client"

import {
  IconAlignmentCenter,
  IconAlignmentCenterFill,
  IconAlignmentJustify,
  IconAlignmentJustifyFill,
  IconAlignmentLeft,
  IconAlignmentLeftFill,
  IconCamera,
  IconCameraFill,
  IconCursor,
  IconCursorFill,
  IconDotsVertical,
  IconGallery,
  IconGalleryFill,
  IconGrid4,
  IconLink,
  IconPencilBox,
  IconPencilBoxFill,
  IconRedo,
  IconToolbox,
  IconToolboxFill,
  IconUndo,
} from "@intentui/icons"
import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem } from "@/components/ui/menu"
import { Toggle } from "@/components/ui/toggle"
import { Toolbar } from "@/components/ui/toolbar"

export default function ToolbarOrientationDemo() {
  return (
    <Toolbar aria-label="Toolbox" orientation="vertical">
      <Toolbar.Group aria-label="Toolbox">
        <Toolbar.Item aria-label="Cursor" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconCursorFill /> : <IconCursor />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Pencil Box" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconPencilBoxFill /> : <IconPencilBox />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Pencil Box" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconToolboxFill /> : <IconToolbox />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Gallery">
        <Toolbar.Item aria-label="Camera" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Gallery" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Alignment">
        <Toggle aria-label="Align Left" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentLeftFill /> : <IconAlignmentLeft />}</>
          )}
        </Toggle>
        <Toolbar.Item aria-label="Align Center" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentCenterFill /> : <IconAlignmentCenter />}</>
          )}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Align Justify" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group>
        <Menu>
          <Button aria-label="Other options" intent="outline" size="sq-sm">
            <IconDotsVertical />
          </Button>
          <MenuContent placement="right bottom">
            <MenuItem>
              <IconUndo />
              Undo
            </MenuItem>
            <MenuItem>
              <IconRedo />
              Redo
            </MenuItem>
            <MenuItem>
              <IconLink />
              Insert Link
            </MenuItem>
            <MenuItem>
              <IconGallery />
              Insert Image
            </MenuItem>
            <MenuItem>
              <IconGrid4 />
              Insert Grid
            </MenuItem>
          </MenuContent>
        </Menu>
      </Toolbar.Group>
    </Toolbar>
  )
}
