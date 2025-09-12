"use client"

import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
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

export default function SheetControlledDemo() {
  return (
    <Sheet>
      <Button intent="outline">Notifications</Button>
      <SheetContent aria-label="Notifications">
        <SheetHeader>
          <SheetTitle>Manage Notifications</SheetTitle>
          <SheetDescription>Adjust your notification settings below.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <CheckboxGroup aria-label="Notification Settings">
            <Checkbox
              value="n1"
              label="Email Notifications"
              description="Receive updates via email."
            />
            <Checkbox
              value="n2"
              label="SMS Notifications"
              description="Receive updates via SMS messages."
            />
            <Checkbox
              value="n3"
              label="Push Notifications"
              description="Receive real-time notifications on your device."
            />
          </CheckboxGroup>
        </SheetBody>
        <SheetFooter>
          <SheetClose>Cancel</SheetClose>
          <Button intent="primary">Save Settings</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
