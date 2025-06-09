"use client"

import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"

export default function SheetFloatDemo() {
  return (
    <Sheet>
      <Button intent="outline">Float</Button>
      <Sheet.Content isFloat={false}>
        <Sheet.Header>
          <Sheet.Title>Not Floated</Sheet.Title>
          <Sheet.Description>This sheet is not floated.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Footer>
          <Sheet.Close>Cancel</Sheet.Close>
          <Button intent="primary">Save Changes</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  )
}
