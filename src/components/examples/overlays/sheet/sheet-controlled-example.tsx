"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import {
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { TextField } from "@/components/ui/text-field"
import { Textarea } from "@/components/ui/textarea"

export default function SheetControlledDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Feedback</Button>
      <SheetContent isOpen={isOpen} onOpenChange={setIsOpen}>
        <SheetHeader>
          <SheetTitle>Submit Feedback</SheetTitle>
          <SheetDescription>
            Please let us know your thoughts and how we can improve our service.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <TextField name="feedback">
            <Label>Your Feedback</Label>
            <Textarea placeholder="Type your feedback here..." />
          </TextField>
        </SheetBody>
        <SheetFooter>
          <Button intent="outline" onPress={() => setIsOpen(false)}>
            Close
          </Button>
          <Button intent="primary" onPress={() => setIsOpen(false)}>
            Submit Feedback
          </Button>
        </SheetFooter>
      </SheetContent>
    </>
  )
}
