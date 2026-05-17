"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function SheetFloatDemo() {
  return (
    <Sheet>
      <Button intent="outline">Float</Button>
      <SheetContent isFloat={false}>
        <SheetHeader>
          <SheetTitle>Not Floated</SheetTitle>
          <SheetDescription>This sheet is not floated.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>Cancel</SheetClose>
          <Button intent="primary">Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
