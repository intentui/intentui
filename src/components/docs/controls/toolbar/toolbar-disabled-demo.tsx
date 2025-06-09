"use client"

import { Toggle } from "@/components/ui/toggle"
import { Toolbar } from "@/components/ui/toolbar"
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

export default function ToolbarDisabledDemo() {
  return (
    <Toolbar aria-label="Toolbox">
      <Toolbar.Group aria-label="Toolbox">
        <Toggle isDisabled aria-label="Cursor" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconCursorFill /> : <IconCursor />}</>}
        </Toggle>
        <Toggle aria-label="Pencil Box" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconPencilBoxFill /> : <IconPencilBox />}</>}
        </Toggle>
        <Toggle aria-label="Pencil Box" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconToolboxFill /> : <IconToolbox />}</>}
        </Toggle>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group isDisabled aria-label="Gallery">
        <Toolbar.Item aria-label="Camera" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Gallery" size="square-petite" intent="outline">
          {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Alignment">
        <Toggle aria-label="Align Right" intent="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentRightFill /> : <IconAlignmentRight />}</>
          )}
        </Toggle>
        <Toggle aria-label="Align Justify" intent="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </Toggle>
      </Toolbar.Group>
    </Toolbar>
  )
}
