"use client"

import React from "react"

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
  IconUndo
} from "@intentui/icons"
import { Button, Menu, Toggle, Toolbar } from "ui"

export default function ToolbarOrientationDemo() {
  return (
    <Toolbar aria-label="Toolbox" orientation="vertical">
      <Toolbar.Group aria-label="Toolbox">
        <Toolbar.Item aria-label="Cursor" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconCursorFill /> : <IconCursor />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Pencil Box" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconPencilBoxFill /> : <IconPencilBox />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Pencil Box" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconToolboxFill /> : <IconToolbox />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Gallery">
        <Toolbar.Item aria-label="Camera" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Gallery" size="square-petite" appearance="outline">
          {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Alignment">
        <Toggle aria-label="Align Left" size="square-petite" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentLeftFill /> : <IconAlignmentLeft />}</>
          )}
        </Toggle>
        <Toolbar.Item aria-label="Align Center" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentCenterFill /> : <IconAlignmentCenter />}</>
          )}
        </Toolbar.Item>
        <Toolbar.Item aria-label="Align Justify" appearance="outline">
          {({ isSelected }) => (
            <>{isSelected ? <IconAlignmentJustifyFill /> : <IconAlignmentJustify />}</>
          )}
        </Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group>
        <Menu>
          <Button aria-label="Other options" appearance="outline" size="square-petite">
            <IconDotsVertical />
          </Button>
          <Menu.Content showArrow placement="right">
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
      </Toolbar.Group>
    </Toolbar>
  )
}
