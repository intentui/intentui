import React from "react"

import { SliderOnPopoverBlock } from "@/components/blocks/slider-on-popover-block"
import {
  IconCamera,
  IconCameraFill,
  IconDuplicate,
  IconDuplicateFill,
  IconGallery,
  IconGalleryFill,
  IconHeart,
  IconHeartFill,
  IconMagic,
  IconMagicFill,
  IconVideoPlaylist,
  IconVideoPlaylistFill
} from "@intentui/icons"
import { Card, Toolbar } from "ui"

export function ToolbarBlock() {
  return (
    <Card className="px-4 py-8 bg-tertiary">
      <div className="flex justify-center gap-2">
        <Toolbar aria-label="Toolbars" className="flex justify-between">
          <Toolbar.Group aria-label="Actions">
            <Toolbar.Item aria-label="Support" appearance="outline">
              {({ isSelected }) => <>{isSelected ? <IconHeartFill /> : <IconHeart />}</>}
            </Toolbar.Item>
            <Toolbar.Item aria-label="Duplicate" appearance="outline">
              {({ isSelected }) => <>{isSelected ? <IconDuplicateFill /> : <IconDuplicate />}</>}
            </Toolbar.Item>
            <Toolbar.Item aria-label="Resolve with AI" appearance="outline">
              {({ isSelected }) => <>{isSelected ? <IconMagicFill /> : <IconMagic />}</>}
            </Toolbar.Item>
            <SliderOnPopoverBlock />
          </Toolbar.Group>
          <Toolbar.Separator className="sm:flex hidden" />
          <Toolbar.Group className="sm:flex gap-2 hidden" aria-label="Gallery">
            <Toolbar.Item aria-label="Camera" size="square-petite" appearance="outline">
              {({ isSelected }) => <>{isSelected ? <IconCameraFill /> : <IconCamera />}</>}
            </Toolbar.Item>
            <Toolbar.Item aria-label="Gallery" size="square-petite" appearance="outline">
              {({ isSelected }) => <>{isSelected ? <IconGalleryFill /> : <IconGallery />}</>}
            </Toolbar.Item>
            <Toolbar.Item aria-label="Playlist" size="square-petite" appearance="outline">
              {({ isSelected }) => (
                <>{isSelected ? <IconVideoPlaylistFill /> : <IconVideoPlaylist />}</>
              )}
            </Toolbar.Item>
          </Toolbar.Group>
        </Toolbar>
      </div>
    </Card>
  )
}
