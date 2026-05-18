"use client"

import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxGroup, CheckboxLabel } from "@/components/ui/checkbox"
import { Description } from "@/components/ui/field"
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
            <Checkbox value="n1">
              <CheckboxLabel>Email Notifications</CheckboxLabel>
              <Description>Receive updates via email.</Description>
            </Checkbox>
            <Checkbox value="n2">
              <CheckboxLabel>SMS Notifications</CheckboxLabel>
              <Description>Receive updates via SMS messages.</Description>
            </Checkbox>
            <Checkbox>
              <CheckboxLabel>SMS Notifications</CheckboxLabel>
              <Description>Receive updates via SMS messages.</Description>
            </Checkbox>
            <Checkbox value="n3">
              <CheckboxLabel>Push Notifications</CheckboxLabel>
              <Description>Receive real-time notifications on your device.</Description>
            </Checkbox>
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
