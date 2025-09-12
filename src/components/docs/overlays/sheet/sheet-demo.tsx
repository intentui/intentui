"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { TextField } from "@/components/ui/text-field"

export default function SheetDemo() {
  return (
    <Sheet>
      <Button intent="outline">Edit Settings</Button>
      <SheetContent>
        {({ close }) => (
          <>
            <SheetHeader>
              <SheetTitle>Update User Settings</SheetTitle>
              <SheetDescription>Adjust your preferences and configurations here.</SheetDescription>
            </SheetHeader>
            <SheetBody className="space-y-4">
              <TextField label="Username" type="text" placeholder="Enter your username" />
              <TextField label="Email" type="email" placeholder="Enter your email address" />
              <Checkbox
                label="Enable notifications"
                description="Receive updates and alerts via email."
              />
            </SheetBody>
            <SheetFooter>
              <SheetClose>Cancel</SheetClose>
              <Button onPress={close} intent="primary" type="submit">
                Save Changes
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
