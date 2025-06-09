"use client"

import React from "react"

import { IconAdjustment } from "@intentui/icons"
import { Button, Description, Popover, Slider } from "ui"

export function SliderOnPopoverBlock() {
  const [fontSize, setFontSize] = React.useState<number>(16)
  const [lineHeight, setLineHeight] = React.useState<number[]>([1.5, 1.75])
  return (
    <Popover>
      <Button
        aria-label="Slider on Popover"
        size="square-petite"
        appearance="outline"
        className="[&>[data-slot=icon]]:text-fg"
      >
        <IconAdjustment />
      </Button>
      <Popover.Content>
        <>
          <div>
            <Slider value={fontSize} onChange={(v) => setFontSize(v as number)} label="Font Size" />
            <Description className="mt-2 block [&>strong]:text-fg">
              Current font size: <strong>{fontSize ?? "-"}</strong>
            </Description>
          </div>
          <div>
            <Slider
              value={lineHeight}
              onChange={(v) => setLineHeight(v as number[])}
              label="Line Height"
            />
            <Description className="mt-2 block [&>strong]:text-fg">
              Current line height: <strong>{lineHeight ?? "-"}</strong>
            </Description>
          </div>
        </>
      </Popover.Content>
    </Popover>
  )
}
