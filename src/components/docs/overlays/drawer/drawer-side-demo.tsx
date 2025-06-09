"use client"

import { Button } from "@/components/ui/button"
import { Drawer, type DrawerContentProps } from "@/components/ui/drawer"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export default function DrawerSideDemo() {
  const [side, setSide] = useState("bottom")
  return (
    <>
      <RadioGroup orientation="horizontal" aria-label="Side" value={side} onChange={setSide}>
        {["top", "bottom", "left", "right"].map((side) => (
          <Radio key={side} className="capitalize" value={side}>
            {side}
          </Radio>
        ))}
      </RadioGroup>
      <Separator className="my-6 h-px w-full" />
      <Drawer>
        <Button intent="outline" className="capitalize">
          {side}
        </Button>
        <Drawer.Content side={side as DrawerContentProps["side"]}>
          <Drawer.Header>
            <Drawer.Title className="capitalize">{side}</Drawer.Title>
            <Drawer.Description>
              The drawer will be positioned on the {side} side of the screen.
            </Drawer.Description>
          </Drawer.Header>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
