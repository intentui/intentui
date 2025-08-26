"use client"

import {
  IconAlignmentJustify,
  IconAlignmentJustifyFill,
  IconAlignmentRight,
  IconAlignmentRightFill,
  IconCamera,
  IconCameraFill,
  IconCursor,
  IconCursorFill,
  IconGallery,
  IconGalleryFill,
  IconPencilBox,
  IconPencilBoxFill,
  IconToolbox,
  IconToolboxFill,
} from "@intentui/icons"
import { Toggle } from "@/components/ui/toggle"
import { Toolbar } from "@/components/ui/toolbar"

export default function ToolbarDisabledDemo() {
  return (
    <Toolbar aria-label="Toolbox">
      <Toolbar.Group aria-label="Toolbox">
        <Toolbar.Item isDisabled aria-label="Cursor" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconCursorFill /> : <IconCursor />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Pencil Box" size="sq-sm">
          {({ isSelected }) => (
            <>{isSelected ? <IconPencilBoxFill /> : <IconPencilBox />}</>
          )}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Pencil Box" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconToolboxFill /> : <IconToolbox />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group isDisabled aria-label="Gallery">
        <Toolbar.Item aria-label="Camera" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Gallery" size="sq-sm">
          {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Alignment">
        <Toggle aria-label="Align Right">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentRightFill /> : <IconAlignmentRight />}</>
          )}
        </Toggle>
        <Toggle aria-label="Align Justify">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </Toggle>
      </Toolbar.Group>
    </Toolbar>
  )
}
