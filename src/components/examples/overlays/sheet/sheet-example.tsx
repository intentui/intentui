"use client"

import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxField } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
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
              <TextField>
                <Label>Username</Label>
                <Input type="text" placeholder="Enter your username" />
              </TextField>
              <TextField>
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your email address" />
              </TextField>
              <CheckboxField>
                <Checkbox>Enable notifications</Checkbox>
                <Description>Receive updates and alerts via email.</Description>
              </CheckboxField>
            </SheetBody>
            <SheetFooter>
              <SheetClose>Cancel</SheetClose>
              <Button onPress={close} intent="primary" type="submit">
                Save
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
