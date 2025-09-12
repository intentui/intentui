"use client"

import { useState } from "react"
import { titleCase } from "usemods"
import { Button } from "@/components/ui/button"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

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
      <SheetContent isOpen={isOpen} onOpenChange={setIsOpen} side={sheetSide}>
        <SheetHeader>
          <SheetTitle>{titleCase(sheetSide)}</SheetTitle>
          <SheetDescription>The sheet will go from {sheetSide} side.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </>
  )
}
