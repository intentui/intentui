"use client"

import React from "react"

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
  IconToolboxFill
} from "@intentui/icons"
import { Toggle, Toolbar } from "ui"

export default function ToolbarDisabledDemo() {
  return (
    <Toolbar aria-label="Toolbox">
      <Toolbar.Group aria-label="Toolbox">
        <Toggle isDisabled aria-label="Cursor" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconCursorFill /> : <IconCursor />}</>}
        </Toggle>
        <Toggle aria-label="Pencil Box" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconPencilBoxFill /> : <IconPencilBox />}</>}
        </Toggle>
        <Toggle aria-label="Pencil Box" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconToolboxFill /> : <IconToolbox />}</>}
        </Toggle>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group isDisabled aria-label="Gallery">
        <Toolbar.Item aria-label="Camera" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Gallery" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Alignment">
        <Toggle aria-label="Align Right" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentRightFill /> : <IconAlignmentRight />}</>
          )}
        </Toggle>
        <Toggle aria-label="Align Justify" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </Toggle>
      </Toolbar.Group>
    </Toolbar>
  )
}
