"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

export default function SheetControlledDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Feedback</Button>
      <Sheet.Content isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sheet.Header>
          <Sheet.Title>Submit Feedback</Sheet.Title>
          <Sheet.Description>
            Please let us know your thoughts and how we can improve our service.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Textarea label="Your Feedback" placeholder="Type your feedback here..." />
        </Sheet.Body>
        <Sheet.Footer>
          <Button intent="outline" onPress={() => setIsOpen(false)}>
            Close
          </Button>
          <Button intent="primary" onPress={() => setIsOpen(false)}>
            Submit Feedback
          </Button>
        </Sheet.Footer>
      </Sheet.Content>
    </>
  )
}
