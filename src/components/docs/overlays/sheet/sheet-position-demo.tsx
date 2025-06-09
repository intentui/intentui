"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"
import { titleCase } from "usemods"

type Side = "left" | "right" | "top" | "bottom"
export default function SheetPositionDemo() {
  const [sheetSide, setSheetSide] = useState<Side>("left")
  const [isOpen, setIsOpen] = useState(false)

  const sides: Side[] = ["left", "right", "top", "bottom"]

  const pressHandler = (side: Side, open: boolean) => {
    setSheetSide(side)
    setIsOpen(open)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {sides.map((side, idx) => (
          <Button intent="outline" onPress={() => pressHandler(side, true)} key={idx}>
            {titleCase(side)}
          </Button>
        ))}
      </div>
      <Sheet.Content isOpen={isOpen} onOpenChange={setIsOpen} side={sheetSide}>
        <Sheet.Header>
          <Sheet.Title>{titleCase(sheetSide)}</Sheet.Title>
          <Sheet.Description>The sheet will go from {sheetSide} side.</Sheet.Description>
        </Sheet.Header>
      </Sheet.Content>
    </>
  )
}
