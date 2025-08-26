"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet } from "@/components/ui/sheet"
import { TextField } from "@/components/ui/text-field"

export default function SheetDemo() {
  return (
    <Sheet>
      <Button intent="outline">Edit Settings</Button>
      <Sheet.Content>
        {({ close }) => (
          <>
            <Sheet.Header>
              <Sheet.Title>Update User Settings</Sheet.Title>
              <Sheet.Description>
                Adjust your preferences and configurations here.
              </Sheet.Description>
            </Sheet.Header>
            <Sheet.Body className="space-y-4">
              <TextField label="Username" type="text" placeholder="Enter your username" />
              <TextField
                label="Email"
                type="email"
                placeholder="Enter your email address"
              />
              <Checkbox
                label="Enable notifications"
                description="Receive updates and alerts via email."
              />
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close>Cancel</Sheet.Close>
              <Button onPress={close} intent="primary" type="submit">
                Save Changes
              </Button>
            </Sheet.Footer>
          </>
        )}
      </Sheet.Content>
    </Sheet>
  )
}
