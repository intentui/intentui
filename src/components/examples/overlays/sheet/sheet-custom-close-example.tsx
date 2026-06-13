"use client"

import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/ui/checkbox"
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
            <CheckboxField value="n1">
              <Checkbox>Email Notifications</Checkbox>
              <Description>Receive updates via email.</Description>
            </CheckboxField>
            <CheckboxField value="n2">
              <Checkbox>SMS Notifications</Checkbox>
              <Description>Receive updates via SMS messages.</Description>
            </CheckboxField>
            <CheckboxField>
              <Checkbox>SMS Notifications</Checkbox>
              <Description>Receive updates via SMS messages.</Description>
            </CheckboxField>
            <CheckboxField value="n3">
              <Checkbox>Push Notifications</Checkbox>
              <Description>Receive real-time notifications on your device.</Description>
            </CheckboxField>
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
